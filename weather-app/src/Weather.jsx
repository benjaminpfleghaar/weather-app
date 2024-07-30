export default function Weather({ locationWeather }) {
	return (
		<>
			{Object.keys(locationWeather).length !== 0 && (
				<main>
					<p>{locationWeather.city}</p>
					<p className="temperature">{locationWeather.temperature}</p>
				</main>
			)}
		</>
	);
}
