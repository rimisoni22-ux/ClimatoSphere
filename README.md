# 🌦️ ClimatoSphere

**ClimatoSphere** is a sophisticated weather dashboard designed to provide high-precision meteorological data with a focus on user experience and clean UI/UX principles. Built with **React** and **Vite**, it leverages asynchronous API handling to deliver real-time updates globally.

<div align="center">

### 🌐 [**Live Demo**](https://your-live-link-here.vercel.app)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

---

## 🚀 Key Features

* **Comprehensive Metrics:** Tracks temperature (actual/feels like), humidity, atmospheric pressure, and visibility.
* **Astro Data:** Precise calculation of local Sunrise and Sunset timings.
* **Theming Engine:** Implementation of a robust **Dark/Light mode** toggle using CSS `:root` variables for a seamless user experience.
* **Search Intelligence:** Dynamic search functionality to fetch and display data for any city worldwide instantly.
* **Asynchronous State Management:** Optimized data fetching patterns to ensure a lag-free, responsive interface.

---

## 🛠️ Technical Stack

| Category | Technology |
| :--- | :--- |
| **Core Library** | React 18 |
| **Build Tool** | Vite (Lightning-fast HMR) |
| **State Management** | React Hooks (`useState`, `useEffect`) |
| **Styling** | Modular CSS with Global Variable Support |
| **Data Source** | OpenWeatherMap API |

---

## 📂 Architecture Overview

The project follows a modular, component-based architecture designed for scalability:

* **`SearchBox.jsx`** – Manages user input validation and API query execution.
* **`WeatherCard.jsx`** – The primary visual display for hero weather data.
* **`InfoBox.jsx`** – A detailed grid system for secondary metrics (Humidity, Pressure, etc.).
* **`App.jsx`** – The application root managing global state and the theme provider.

---

## 📦 Installation & Configuration

### Prerequisites
* **Node.js** (v16.0.0 or higher)
* **npm** or **yarn**

### Setup Steps
1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/ClimatoSphere.git](https://github.com/your-username/ClimatoSphere.git)
   cd weatherapp
   Install Dependencies

Bash
npm install
Environment Variables
Create a .env file in the root directory and add your key:

Code snippet
VITE_WEATHER_API_KEY=your_openweathermap_api_key
Launch Development Server

Bash
npm run dev
📈 Future Roadmap
[ ] 5-Day Forecast: Integration of extended weather predictions.

[ ] Auto-Location: Geolocation-based weather detection on initial load.

[ ] Unit Toggle: One-click conversion between Celsius and Fahrenheit.

📄 License
Distributed under the MIT License. See LICENSE for more information.

<div align="center">

Developed with ❤️ by Rimi

</div>
