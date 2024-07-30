export default function Weather({ weatherData }) {
	return (
		<>
			{Object.keys(weatherData).length !== 0 && (
				<main>
					<p>{weatherData.city}</p>
					<p className="temperature">{weatherData.temperature}</p>
				</main>
			)}
		</>
	);
}
