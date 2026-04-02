import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Search } from "lucide-react";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "d1c1279e5a15e407cf6b81212fedfa13";

function SearchBox({ updatInfo, darkMode }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const errorTextColor = darkMode ? '#F87171' : '#FCA5A5';

    const getWeatherInfo = async () => {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const jsonResponse = await response.json();
        if (jsonResponse.cod !== 200) throw new Error(jsonResponse.message || "City not found");
        return {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            min: jsonResponse.main.temp_min,
            max: jsonResponse.main.temp_max,
            feelsLike: jsonResponse.main.feels_like,
            humidity: jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].main,
            icon: jsonResponse.weather[0].icon,
            wind: jsonResponse.wind.speed,
            pressure: jsonResponse.main.pressure,
            clouds: jsonResponse.clouds.all,
            visibility: jsonResponse.visibility,
            sunrise: jsonResponse.sys.sunrise,
            sunset: jsonResponse.sys.sunset,
        };
    };

    const handleChange = (evt) => setCity(evt.target.value);
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(false);

        try {
            const newInfo = await getWeatherInfo();
            updatInfo(newInfo);
            setCity("");
        } catch {
            setError(true);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 380, margin: '0 auto', transition: 'all 0.3s ease' }}>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <TextField
                        id="city"
                        label="Enter City Name"
                        variant="outlined"
                        required
                        fullWidth
                        value={city}
                        onChange={handleChange}
                        size="medium"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                backgroundColor: darkMode ? '#374151' : 'white',
                                color: darkMode ? 'white' : 'inherit',
                                '& fieldset': { borderColor: darkMode ? '#D1D5DB' : '#A5B4FC' },
                                '&:hover fieldset': { borderColor: darkMode ? '#F97316' : '#6366F1' },
                                '&.Mui-focused fieldset': { borderColor: darkMode ? '#F97316' : '#4F46E5' },
                            },
                            '& .MuiInputLabel-root': { color: darkMode ? '#D1D5DB' : '#4F46E5' },
                            '& .MuiInputBase-input': { color: darkMode ? 'white' : 'inherit' }
                        }}
                    />
                    <Button 
                        variant="contained" 
                        type="submit" 
                        endIcon={<Search size={20}/>} 
                        fullWidth 
                        sx={{ backgroundColor: '#EC4899', '&:hover': { backgroundColor: '#DB2777' }, padding: '12px 0', borderRadius: '10px', fontWeight: 'bold', transition: 'all 0.3s ease' }}
                    >
                        Get Weather
                    </Button>
                </Box>
                {error && 
                    <Typography sx={{ mt: 1.5, fontSize: '0.875rem', fontWeight: 'medium', color: errorTextColor }}>
                        ⚠️ City Not Found. Please check the spelling!
                    </Typography>
                }
            </form>
        </Box>
    );
}

export default SearchBox;
