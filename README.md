# ☀️ Weather App

Get current temperature for a given location

## 👀 Wireframe

![Wireframe](https://github.com/user-attachments/assets/f4dfa280-edff-4ac0-b60c-263e3a4c6b3d)

## 📋 Tasks

-   Build UI
-   Style application
-   Fetch data
    -   Get city lat/lon from [Nominatim](https://nominatim.org/release-docs/develop/)
    -   Pass data to [Open-Meteo](https://open-meteo.com/)
-   Display output and reset form

## ⛰️ Challenges/Edge Cases

-   Organize styles module based
-   Provide meaningful error messages
-   Name components properly

### ✅ Solved

-   Get APIs for location/weather
-   Use a Utils.js file to organize functions
-   Handle race conditions by using `useEffect()`
-   Fetching two URLs depending on each other at the same time
-   Using SCSS instead of regular CSS
-   Hide output container initially
-   Refactor `useEffect()` hook for proper error handling
    -   City does not exist
    -   Weather data can not be fetched
 
## 👨‍🦽 Accessibility

- Use `role` Tag
- Use `aria-label`
- Have a look at `prefers-reduced-motion`
- Rely on `label` for inputs instead of `placeholder`?
- Use `accesskey`

## 🎓 Things I learned so far

-   Inputs can have a Regex pattern like `pattern=[A-Za-z]` but it doesn't work within React 😔
-   Check if an object is empty via `Object.keys(Obj).length`
-   Set focus on input on page load via `autofocus` (React: autoFocus)
-   Use a boolean flag to avoid race conditions: `return () => { boolean = !value; }`
    -   With `abortController.abort()` you save even more bandwidth
-   How to use the `AbortController()` for cleanup
    -   How to combine it with `try/catch()`
-   Using `Promise.all()` instead of `fetch()` for fetching multiple URLs
    -   But it's not applicable if the second URL needs data from the first

## 💡 Ideas

-   Display an image of the city
-   Redesign the loading indicator
-   Show city suggestions while typing
-   Get position of user via browser geo
-   Save/Delete search queries (show when focus on input field)
-   Add icon to indicate current weather situation (rain, snow, ...)
-   Correct misspelling: _You typed Londn, do you mean London?_
-   Change background color based on current temperature

### ✅ Implemented

-   Add a favicon to the header
-   Provide loading indicator after click
-   Disable button while waiting for response
-   Calculate cloud cover and show icon

## ⚙️ Tech Stack

-   Visual Studio Code
-   GitHub
-   React
-   SASS
-   Vite
