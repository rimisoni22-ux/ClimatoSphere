import React, { useState } from "react";
import Box from "@mui/material/Box";
import SearchPage from "./components/SearchPage";
import ResultsPage from "./components/ResultsPage";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [view, setView] = useState('search'); 
    const [weatherInfo, setWeatherInfo] = useState({
        city: null, 
        feelsLike: 0, 
        temp: 0,
        min: 0,
        max: 0,
        humidity: 0,
        weather: "",
        icon: "50d",
        wind: 0,
        pressure: 0,
        clouds: 0,
        visibility: 0,
        sunrise: 0,
        sunset: 0,
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
        setView('results');
    };

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    const bgImage = "https://images.unsplash.com/photo-1596893724353-f698a3dec8e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"; 

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
                fontFamily: 'Roboto, sans-serif',
                transition: 'all 0.5s ease',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: darkMode ? 'brightness(0.7)' : 'none'
            }}
        >
            {view === 'search' && (
                <SearchPage
                    updateInfo={updateInfo}
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />
            )}

            {view === 'results' && weatherInfo.city && (
                <ResultsPage
                    info={weatherInfo}
                    darkMode={darkMode}
                    setView={setView}
                />
            )}
        </Box>
    );
}
