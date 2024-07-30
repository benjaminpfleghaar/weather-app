export default function Input({ setIsFetchingData, city, setCity }) {
	const handleSubmit = (e) => {
		e.preventDefault();

		setIsFetchingData(true);
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
