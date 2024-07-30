import { useEffect, useState } from "react";
import Input from "./Input";
import Weather from "./Weather";

export default function App() {
	const [city, setCity] = useState("");
	const [isFetchingData, setIsFetchingData] = useState(false);
	const [locationWeather, setLocationWeather] = useState({});

	useEffect(() => {
		const fetchDataAsync = async (city) => {
			if (isFetchingData) {
				// Get coordinates based on city name from https://nominatim.org/
				const coordinatesRessource = await fetch(
					`https://nominatim.openstreetmap.org/search?q=${city}&format=jsonv2&limit=1&accept-language=en-US`
				);
				const coordinatesData = await coordinatesRessource.json();

				// Pass coordinates to get weather data from https://open-meteo.com/
				const weatherRessource = await fetch(
					`https://api.open-meteo.com/v1/forecast?latitude=${coordinatesData[0].lat}&longitude=${coordinatesData[0].lon}&current=temperature_2m`
				);
				const weatherData = await weatherRessource.json();

				setLocationWeather({
					city: coordinatesData[0].display_name,
					temperature: weatherData.current.temperature_2m + "°",
				});
			}
		};

		fetchDataAsync(city);

		return () => {
			setIsFetchingData(false);
			setCity("");
		};
	}, [isFetchingData]);

	return (
		<>
			<Input
				setIsFetchingData={setIsFetchingData}
				city={city}
				setCity={setCity}
			/>
			<Weather locationWeather={locationWeather} />
		</>
	);
}
