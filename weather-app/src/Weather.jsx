import { useEffect, useState } from "react";

const clouds = ["☀️", " 🌤️", "⛅️", "☁️"];

export default function Weather({ city, isLoading, setIsLoading }) {
	const [error, setError] = useState(null);
	const [weatherData, setWeatherData] = useState({});

	useEffect(() => {
		// Start loading indicator
		setIsLoading(true);

		// Use AbortController to handle cleanup
		const abortController = new AbortController();

		const fetchDataAsync = async () => {
			try {
				// Get coordinates based on city name from https://nominatim.org/
				const coordinatesRessource = await fetch(
					`https://nominatim.openstreetmap.org/search?q=${city}&format=jsonv2&limit=1&accept-language=en-US`,
					{ signal: abortController.signal }
				);
				if (!coordinatesRessource.ok) {
					throw new Error(
						`HTTPS error! status: ${coordinatesRessource.status} for URL: ${coordinatesRessource.url}`
					);
				}
				const coordinatesResponse = await coordinatesRessource.json();

				// Pass coordinates to get weather data from https://open-meteo.com/
				const weatherRessource = await fetch(
					`https://api.open-meteo.com/v1/forecast?latitude=${coordinatesResponse[0].lat}&longitude=${coordinatesResponse[0].lon}&current=temperature_2m,weather_code,cloud_cover`,
					{ signal: abortController.signal }
				);
				if (!weatherRessource.ok) {
					throw new Error(
						`HTTPS error! status: ${weatherRessource.status} for URL: ${weatherRessource.url}`
					);
				}
				const weatherResponse = await weatherRessource.json();

				// Set data
				setWeatherData({
					city: coordinatesResponse[0].display_name,
					temperature:
						weatherResponse.current.temperature_2m +
						weatherResponse.current_units.temperature_2m,
					clouds: calculateCloudCover(
						weatherResponse.current.cloud_cover
					),
				});
				setError(null);
				setIsLoading(false);
			} catch (err) {
				setError(err);
				setIsLoading(false);
			}
		};

		fetchDataAsync();

		// Cleanup function to abort the fetch (prevent race conditions)
		return () => {
			abortController.abort();
		};
	}, [city]);

	if (error)
		return (
			<main>
				<p>Error: {error.message}</p>
			</main>
		);
	else if (isLoading)
		return (
			<main>
				<p>⏳ Loading...</p>
			</main>
		);

	return (
		<main>
			<p>{weatherData.city}</p>
			<p className="temperature">
				{weatherData.temperature} {weatherData.clouds}
			</p>
		</main>
	);
}

// Calculate cloud cover (0 - 100)
const calculateCloudCover = (cloudCover) => {
	let cloudArray;

	for (let i = 0; i < clouds.length; i++) {
		if (cloudCover >= 0 && cloudCover <= 25) {
			cloudArray = clouds[0];
		} else if (cloudCover > 25 && cloudCover <= 50) {
			cloudArray = clouds[1];
		} else if (cloudCover > 50 && cloudCover <= 75) {
			cloudArray = clouds[2];
		} else {
			cloudArray = clouds[3];
		}
	}

	return cloudArray;
};
