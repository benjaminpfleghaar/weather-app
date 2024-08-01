import { useState } from "react";
import Input from "./Input";
import Weather from "./Weather";

export default function App() {
	const [city, setCity] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<>
			<Input setCity={setCity} isLoading={isLoading} />
			{city && (
				<Weather
					city={city}
					isLoading={isLoading}
					setIsLoading={setIsLoading}
				/>
			)}
		</>
	);
}
