import requests

# Replace with your own API key and city
API_KEY = "YOUR_API_KEY_HERE"
CITY = "Aarhus"
RAIN_THRESHOLD = 20.0  # mm

url = f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{CITY}/last3days?unitGroup=metric&include=days&elements=datetime,precip,conditions&key={API_KEY}&contentType=json"

try:
    response = requests.get(url)
    response.raise_for_status()
    data = response.json()

    print(f"🌍 City: {CITY}")
    print("📊 Recent Precipitation (Last 3 Days):\n")

    rain_triggered = False

    for day in data.get("days", []):
        date = day.get("datetime")
        precip = day.get("precip", 0)
        conditions = day.get("conditions", "Unknown")

        print(f"{date} - {precip:.1f} mm - {conditions}")

        if precip >= RAIN_THRESHOLD:
            rain_triggered = True

    if rain_triggered:
        print("\n✅ Trigger condition MET (Rain ≥ 20 mm)")
    else:
        print("\n⏸️ Trigger condition NOT met")

except requests.exceptions.RequestException as e:
    print(f"❌ API error: {e}")
