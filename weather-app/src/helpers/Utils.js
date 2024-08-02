// Calculate cloud cover (0 - 100)
export const calculateCloudCover = (cloudCover) => {
	if (cloudCover >= 0 && cloudCover <= 25) {
		return "☀️";
	} else if (cloudCover > 25 && cloudCover <= 50) {
		return " 🌤️";
	} else if (cloudCover > 50 && cloudCover <= 75) {
		return "⛅️";
	} else {
		return "☁️";
	}
};
