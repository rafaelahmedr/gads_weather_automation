/**
 * Weather-Based Campaign Trigger for Google Ads
 * ------------------------------------------------
 * Enables or pauses a Google Ads campaign based on rainfall data
 * fetched from the Visual Crossing Weather API.
 *
 * Logic:
 * - If rainfall ≥ 20 mm on any day in the past 3 days → campaign is ENABLED
 * - Otherwise → campaign is PAUSED
 *
 * Author: Rafael Ahmed
 * License: MIT
 * Date: 2025
 */

function main() {
  const API_KEY = 'YOUR_API_KEY_HERE';           // Replace with your Visual Crossing API key
  const CITY = 'YOUR_CITY_NAME';                 // Replace with your target city (e.g., 'Aarhus')
  const CAMPAIGN_NAME = 'YOUR_CAMPAIGN_NAME';    // Replace with the exact name of your Google Ads campaign
  const RAIN_THRESHOLD = 20.0;                   // mm per day – adjust as needed

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${CITY}/last3days?unitGroup=metric&include=days&elements=datetime,precip,conditions&key=${API_KEY}&contentType=json`;

  try {
    const response = UrlFetchApp.fetch(url);
    const data = JSON.parse(response.getContentText());

    if (!data.days || data.days.length === 0) {
      Logger.log("No weather data returned from API.");
      return;
    }

    let rainTriggered = false;

    for (let i = 0; i < data.days.length; i++) {
      const day = data.days[i];
      const date = day.datetime;
      const precip = parseFloat(day.precip) || 0;
      const conditions = day.conditions || 'Unknown';

      Logger.log(`Date: ${date}, Precipitation: ${precip.toFixed(1)} mm, Conditions: ${conditions}`);

      if (precip >= RAIN_THRESHOLD) {
        rainTriggered = true;
        break;
      }
    }

    const campaignIterator = AdsApp.campaigns()
      .withCondition(`Name = "${CAMPAIGN_NAME}"`)
      .get();

    if (!campaignIterator.hasNext()) {
      Logger.log(`Campaign "${CAMPAIGN_NAME}" not found.`);
      return;
    }

    const campaign = campaignIterator.next();
    const isEnabled = campaign.isEnabled();

    if (rainTriggered && !isEnabled) {
      campaign.enable();
      Logger.log(`Campaign enabled due to rainfall above threshold.`);
    } else if (!rainTriggered && isEnabled) {
      campaign.pause();
      Logger.log(`Campaign paused due to lack of rainfall above threshold.`);
    } else {
      Logger.log(`No action taken. Campaign is already in the correct state (${isEnabled ? "ENABLED" : "PAUSED"}).`);
    }

  } catch (error) {
    Logger.log(`Error occurred while processing the script: ${error.message}`);
  }
}
