# 🌧️ Weather-Based Google Ads Campaign Trigger

This project is a lightweight automation system built using **Google Ads Scripts (JavaScript)** to dynamically enable or pause a campaign based on real-time rainfall in a given city. It integrates with the **Visual Crossing Weather API** and follows rainfall thresholds based on the **Danish Meteorological Institute (DMI)**.

---

## 🔍 Overview

This script helps marketers:
- **Enable** campaigns when recent rainfall exceeds a defined threshold (e.g., 20 mm/day)
- **Pause** campaigns when conditions are dry
- Spend smarter and deliver more relevant ads based on actual weather events

---

## ⚙️ How It Works

1. Fetches the past 3 days of rainfall data via Visual Crossing API
2. Checks if rainfall exceeds the threshold on any day
3. Enables the campaign if threshold is met, pauses it otherwise

---

## 🌦️ Rain Intensity Reference (DMI)

| Dansk betegnelse     | English Term        | Defined Intensity             |
|----------------------|---------------------|-------------------------------|
| Let regn             | Light rain          | < 2.5 mm/hour                 |
| Moderat regn         | Moderate rain       | 2.5–7.6 mm/hour               |
| Kraftig regn         | Heavy rain          | > 7.6 mm/hour                 |
| Skybrud              | Cloudburst          | ≥ 15 mm in 30 minutes         |
| Voldsomt skybrud     | Extreme cloudburst  | ≥ 30 mm in 30 minutes         |

---

## 📁 Files Included

- `weather_trigger.js` – Core automation script for Google Ads
- `test_weather_api.py` – Python script to test API key and rainfall data before deployment
- `API_SETUP.md` – Step-by-step guide to getting a free Visual Crossing API key
- `CONTRIBUTING.md` – Guidelines for contributing to the project
- `LICENSE` – MIT open-source license
- `.gitignore` – Git exclusions for local/dev environments
- `README.md` – This file

---

## 🧪 Test Your API Key (Python)

Before using the script in Google Ads, you can test the weather data using:

```bash
python test_weather_api.py
