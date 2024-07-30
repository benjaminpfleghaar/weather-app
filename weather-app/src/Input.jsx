export default function Input({ city, setCity, isLoading, setIsLoading }) {
	const handleSubmit = (e) => {
		e.preventDefault();

		setIsLoading(true);
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
				<button type="submit" disabled={isLoading}>
					Search
				</button>
			</form>
		</header>
	);
}
