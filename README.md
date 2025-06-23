# 🌧️ Weather-Based Google Ads Campaign Trigger

This project is a lightweight, JavaScript-based automation script designed to run within the **Google Ads Scripts** environment. It dynamically enables or pauses a campaign based on real-time rainfall data in Denmark, using thresholds aligned with the **Danish Meteorological Institute (DMI)**.

---

## 🔍 Project Overview

The script pulls precipitation data from **Visual Crossing Weather API** for a specified city (e.g., Aarhus) and checks rainfall levels for the **last 3 days**.

- If **≥ 20 mm** of rain is detected on any of the days → the campaign is **enabled**
- If **< 20 mm** across all 3 days → the campaign is **paused**

This ensures campaigns only run during weather conditions that align with user context and product relevance.

---

## 🌦️ Rain Intensity Classifications (DMI)

| Dansk betegnelse     | English Term        | Defined Intensity             |
|----------------------|---------------------|-------------------------------|
| Let regn             | Light rain          | < 2.5 mm/hour                 |
| Moderat regn         | Moderate rain       | 2.5–7.6 mm/hour               |
| Kraftig regn         | Heavy rain          | > 7.6 mm/hour                 |
| Skybrud              | Cloudburst          | ≥ 15 mm in 30 minutes         |
| Voldsomt skybrud     | Extreme cloudburst  | ≥ 30 mm in 30 minutes         |

This project uses a **20 mm/day threshold** to represent significant rainfall conditions (close to *kraftig regn*), triggering campaign activation when that threshold is exceeded.

---

## 📁 Files

- `weather_trigger.js` – Main script file to copy into Google Ads Scripts
- `README.md` – Project documentation

---

## ✅ Benefits

- **Context-Aware Marketing** – Deliver campaigns when they’re most relevant
- **Budget Efficiency** – Avoid spending during dry or off-target conditions
- **Scalable Logic** – Easily adaptable to other cities, thresholds, or weather types (e.g., snow, humidity, temperature)

---

## 🔧 Requirements

- A Google Ads account with script access
- A free API key from [Visual Crossing](https://www.visualcrossing.com/)
- Basic familiarity with Google Ads Scripts and campaign naming conventions

---

## 🧪 Example Use Case

Running a rain gear campaign in Aarhus?  
Let the system automatically enable the campaign **only after actual rainfall** is measured — keeping your spend aligned with real-world demand.

---

## 📬 Contact

**Author**: Rafael Ahmed
Feel free to fork, extend, or contribute. Open to collaboration and feedback.

---

## 📄 License

This project is open-source under the **MIT License**. See `LICENSE` for more details.
