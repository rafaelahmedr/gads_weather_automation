# 🌧️ Weather-Based Google Ads Campaign Trigger

This project is a lightweight automation system using **Google Ads Scripts (JavaScript)** to dynamically enable or pause ad campaigns based on real-world rainfall data. It integrates with the **Visual Crossing Weather API** and follows rainfall thresholds inspired by the **Danish Meteorological Institute (DMI)**.

---

## 🔍 Overview

This script helps marketers:
- ✅ **Enable** campaigns automatically when recent rainfall exceeds a defined threshold (e.g., 20 mm/day)
- ⏸️ **Pause** campaigns when conditions are dry
- 📈 Deliver smarter, more context-aware ads based on weather events

---

## ⚙️ How It Works

1. Fetches rainfall data from the past 3 days via the Visual Crossing API
2. Checks if rainfall on any day exceeds the defined threshold
3. Enables or pauses the campaign accordingly via Google Ads Scripts

---

## 🌦️ Rain Intensity Reference (Based on DMI)

| Danish Term        | English Equivalent  | Defined Intensity         |
|--------------------|---------------------|----------------------------|
| Let regn           | Light rain          | Less than 2.5 mm/hour     |
| Moderat regn       | Moderate rain       | 2.5–7.6 mm/hour           |
| Kraftig regn       | Heavy rain          | More than 7.6 mm/hour     |
| Skybrud            | Cloudburst          | ≥ 15 mm in 30 minutes     |
| Voldsomt skybrud   | Extreme cloudburst  | ≥ 30 mm in 30 minutes     |

---

## 🧠 Google Ads Campaign Type Support

| Campaign Type         | Pause / Enable | Adjust Bids | Weather Logic Possible? | Notes                                  |
|-----------------------|----------------|-------------|--------------------------|----------------------------------------|
| Search                | ✅ Yes         | ✅ Yes      | ✅ Fully Supported       | Best support for weather automation    |
| Display               | ✅ Yes         | ❌ No       | ✅ Limited               | No bid control, only campaign toggling |
| Shopping (Standard)   | ✅ Yes         | ⚠️ Some     | ✅ With Manual Bidding   | Avoid Smart Shopping for more control  |
| Performance Max       | ✅ Yes         | ❌ No       | ⚠️ Campaign-Level Only   | Fully automated; limited access        |
| Video (YouTube)       | ✅ Yes         | ❌ No       | ⚠️ Campaign-Level Only   | Cannot adjust placements or bids       |
| App Campaigns         | ✅ Yes         | ❌ No       | ⚠️ Campaign-Level Only   | Good for basic enable/pause by weather |

---

## 📁 Files Included

- `weather_trigger.js` – Core automation script for Google Ads
- `test_weather_api.py` – Python tool to test API key and rainfall data before deployment
- `API_SETUP.md` – Step-by-step guide to getting a free Visual Crossing API key
- `CONTRIBUTING.md` – Community contribution guidelines
- `LICENSE` – MIT open-source license
- `.gitignore` – Git exclusions for local/dev environments
- `README.md` – This documentation

---

## 🧪 API Testing (Optional Python Script)

Before deploying the Ads script, test your API setup using the included Python script:

```bash
python test_weather_api.py
