import { useState } from "react";

export default function Input({ getWeatherData }) {
	const [city, setCity] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		getWeatherData(city);
		setCity("");
	};

	return (
		<header>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter city name"
					value={city}
					onChange={(e) => setCity(e.target.value)}
					required
					autoFocus
				/>
				<button type="submit">Search</button>
			</form>
		</header>
	);
}
