/**
 * Weather-Based Campaign Trigger for Google Ads
 * ----------------------------------------------
 * Enables or pauses a specific campaign based on rainfall data
 * from the Visual Crossing Weather API.
 * 
 * Logic:
 * - If rainfall ≥ 20 mm on any day in the past 3 days → campaign is ENABLED
 * - Otherwise → campaign is PAUSED
 *
 * 📌 Replace placeholders with your actual API key, city, and campaign name.
 *
 * Author: Rafael Ahmed
 * License: MIT
 * Date: 2025
 */

function main() {
  const API_KEY = 'YOUR_API_KEY_HERE';           // ← Replace with your Visual Crossing API key
  const CITY = 'YOUR_CITY_NAME';                 // ← Replace with your target city (e.g., 'Aarhus')
  const CAMPAIGN_NAME = 'YOUR_CAMPAIGN_NAME';    // ← Replace with the exact name of your Google Ads campaign
  const RAIN_THRESHOLD = 20.0;                   // mm per day – adjust as needed

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${CITY}/last3days?unitGroup=metric&include=days&elements=datetime,precip,conditions&key=${API_KEY}&contentType=json`;

  try {
    const response = UrlFetchApp.fetch(url);
    const data = JSON.parse(response.getContentText());

    if (!data.days || data.days.length === 0) {
      Logger.log("⚠️ No weather data found.");
      return;
    }

    let rainTriggered = false;

    for (let i = 0; i < data.days.length; i++) {
      const day = data.days[i];
      const date = day.datetime;
      const precip = day.precip || 0;
      const conditions = day.conditions || 'Unknown';

      Logger.log(`📅 ${date}: ${precip.toFixed(1)} mm – ${conditions}`);

      if (precip >= RAIN_THRESHOLD) {
        rainTriggered = true;
        break; // Exit loop if one day exceeds the threshold
      }
    }

    const campaignIterator = AdsApp.campaigns()
      .withCondition(`Name = "${CAMPAIGN_NAME}"`)
      .get();

    if (!campaignIterator.hasNext()) {
      Logger.log(`❌ Campaign "${CAMPAIGN_NAME}" not found.`);
      return;
    }

    const campaign = campaignIterator.next();

    if (rainTriggered) {
      campaign.enable();
      Logger.log(`✅ Rain ≥ ${RAIN_THRESHOLD} mm on at least one day – Campaign ENABLED`);
    } else {
      campaign.pause();
      Logger.log(`⏸️ No day had ≥ ${RAIN_THRESHOLD} mm – Campaign PAUSED`);
    }

  } catch (e) {
    Logger.log(`❌ Error: ${e}`);
  }
}
