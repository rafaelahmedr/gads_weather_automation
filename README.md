# 🌧️ Weather-Based Google Ads Campaign Trigger

This project is a lightweight automation system built using **Google Ads Scripts (JavaScript)** to dynamically enable or pause a campaign based on recent rainfall in a selected city. It integrates with the **Visual Crossing Weather API** and applies rainfall thresholds aligned with the **Danish Meteorological Institute (DMI)**.

---

## 🔍 Overview

This script allows marketers to:
- Automatically **enable** a campaign if rainfall exceeds a threshold (e.g., 20 mm in a single day)
- **Pause** the campaign if conditions are dry
- Ensure ad spend is contextually relevant (e.g., only promote rain gear when it's actually raining)

---

## ⚙️ How It Works

1. Fetches the past 3 days of weather data via API
2. Compares precipitation data to a threshold (default: **20 mm/day**)
3. Enables or pauses a campaign based on whether rainfall was sufficient

---

## 🌦️ DMI Rain Intensity Reference

| Dansk betegnelse     | English Term        | Defined Intensity             |
|----------------------|---------------------|-------------------------------|
| Let regn             | Light rain          | < 2.5 mm/hour                 |
| Moderat regn         | Moderate rain       | 2.5–7.6 mm/hour               |
| Kraftig regn         | Heavy rain          | > 7.6 mm/hour                 |
| Skybrud              | Cloudburst          | ≥ 15 mm in 30 minutes         |
| Voldsomt skybrud     | Extreme cloudburst  | ≥ 30 mm in 30 minutes         |

---

## 📁 Files

- `weather_trigger.js` – The core automation script for Google Ads
- `test_weather_api.py` – Optional script to test API key and rainfall data in Python
- `API_SETUP.md` – Instructions on how to get a free Visual Crossing API key
- `LICENSE` – MIT open-source license
- `.gitignore` – Standard exclusions
- `CONTRIBUTING.md` – Guidelines for contributors

---

## 🧪 Optional: Test Your API Key with Python

To verify your API key or check rainfall levels before using the script in Ads, run the `test_weather_api.py` script.

```bash
python test_weather_api.py
