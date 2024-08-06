// Calculate cloud cover (0 - 100)
export const calculateCloudCover = (cloudCover) => {
	if (cloudCover >= 75) {
		return "☁️";
	} else if (cloudCover >= 50) {
		return "⛅️";
	} else if (cloudCover >= 25) {
		return " 🌤️";
	} else {
		return "☀️";
	}
};
