# weather-app
Get current temperature for a given location

## Wireframe
![Wireframe](https://github.com/user-attachments/assets/f4dfa280-edff-4ac0-b60c-263e3a4c6b3d)

## Tasks
1. Build UI
2. Style application
3. Fetch Data
   Get City Lat/Lon from [Nominatim](https://nominatim.org/release-docs/develop/)
   Pass data to [Open-Meteo](https://open-meteo.com/)
5. Display Output and reset form

## Challenges/Edge Cases
- Get APIs for Location/Weather ✅
- How to name components properly?
- Hide output container initially ✅
- Fetching two URLs depending on each other at the same time ✅
- Error handling
  - City does not exist
  - Weather data can not be fetched
- Organize styles based on modules
- Handle race conditions by using `useEffect()`
- Using SCSS instead of regular CSS ✅

## Things I learned so far
- Inputs can have a Regex pattern but it doesn't work within react
- Check if an object is empty via `Object.keys(Obj).length`
- Set focus on input on page load via autofocus (autoFocus)

## Ideas
- Show city suggestions while typing
- Prevent click while waiting for response
- Provide loading indicator after click
- Get position of user via browser geo
- Save/Delete search queries
- Change background color based on current temperature
- Add Favicon

## Tech Stack
- Visual Studio Code
- GitHub
- React
- SASS
- Vite
