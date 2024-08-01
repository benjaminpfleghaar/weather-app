import { useEffect, useState } from "react";

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
						`HTTPS error! status: ${coordinatesRessource.status}`
					);
				}
				const coordinatesResponse = await coordinatesRessource.json();

				// Pass coordinates to get weather data from https://open-meteo.com/
				const weatherRessource = await fetch(
					`https://api.open-meteo.com/v1/forecast?latitude=${coordinatesResponse[0].lat}&longitude=${coordinatesResponse[0].lon}&current=temperature_2m`,
					{ signal: abortController.signal }
				);
				if (!weatherRessource.ok) {
					throw new Error(
						`HTTPS error! status: ${weatherRessource.status}`
					);
				}
				const weatherData = await weatherRessource.json();

				// Set data
				setWeatherData({
					city: coordinatesResponse[0].display_name,
					temperature: weatherData.current.temperature_2m + "°",
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
			<p className="temperature">{weatherData.temperature}</p>
		</main>
	);
}
