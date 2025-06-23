
# 🔑 How to Get a Free Visual Crossing Weather API Key

To use this script, you need an API key from [Visual Crossing Weather](https://www.visualcrossing.com/), which offers a free tier suitable for testing and light use.

---

## 📝 Step-by-Step Instructions

1. Go to: [https://www.visualcrossing.com/weather-data-editions](https://www.visualcrossing.com/weather-data-editions)
2. Click **“Sign Up Free”** and create an account.
3. After signing in, visit your account dashboard.
4. Navigate to the **API Key** section or go directly to: [https://www.visualcrossing.com/account](https://www.visualcrossing.com/account)
5. Copy the API key shown under **“API Key”**
6. In your script, replace the placeholder with your key:

```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```

---

## 📋 Notes

- The free tier allows up to **1,000 API calls/day** (as of 2025)
- Supports both **daily and hourly** weather data
- Use `unitGroup=metric` for mm-based precipitation (suitable for DMI thresholds)

---

## 📂 Where to Place the Key

In the `weather_trigger.js` script:

```javascript
const API_KEY = 'YOUR_API_KEY_HERE'; // ← Replace this line
```

For security, **do not commit your real API key** to public repositories. Use environment variables or config files for private projects.
