import { useState } from "react";

export default function Input({ setCity, isLoading }) {
	const [input, setInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		setCity((prevCity) => input);
	};

	return (
		<header>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter city name"
					value={input}
					onChange={(e) => setInput((prevInput) => e.target.value)}
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
