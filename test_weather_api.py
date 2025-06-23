import requests

# Configuration: replace with your own API key and city
API_KEY = "YOUR_API_KEY_HERE"
CITY = "Aarhus"
RAIN_THRESHOLD = 20.0  # millimeters

url = (
    f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/"
    f"timeline/{CITY}/last3days"
    f"?unitGroup=metric&include=days&elements=datetime,precip,conditions"
    f"&key={API_KEY}&contentType=json"
)

def fetch_weather_data():
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"API request failed: {e}")
        return None

def analyze_rainfall(data):
    print(f"City: {CITY}")
    print("Recent Precipitation (Last 3 Days):\n")

    rain_triggered = False

    for day in data.get("days", []):
        date = day.get("datetime", "N/A")
        precip = float(day.get("precip", 0))
        conditions = day.get("conditions", "Unknown")

        print(f"{date} - {precip:.1f} mm - {conditions}")

        if precip >= RAIN_THRESHOLD:
            rain_triggered = True

    if rain_triggered:
        print("\nTrigger condition MET: Rainfall exceeded threshold.")
    else:
        print("\nTrigger condition NOT met: Rainfall below threshold.")

def main():
    data = fetch_weather_data()
    if data:
        analyze_rainfall(data)

if __name__ == "__main__":
    main()
