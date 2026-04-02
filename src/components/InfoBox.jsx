import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Sun, CloudRain, Snowflake, Thermometer, Droplet, Wind } from "lucide-react";

function InfoBox({ info, darkMode }) {
    const primaryColor = darkMode ? '#F472B6' : '#DB2777';
    const secondaryColor = darkMode ? '#9CA3AF' : '#374151';
    const cardBg = darkMode ? 'rgba(17, 24, 39, 0.9)' : 'rgba(255, 255, 255, 0.9)';
    const detailBg = darkMode ? '#1F2937' : '#F9FAFB';

    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop";
    const COLD_URL = "https://images.unsplash.com/photo-1641505324717-29b6dacdce5a?q=80&w=1074&auto=format&fit=crop";
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=735&auto=format&fit=crop";

    let imageURL = HOT_URL;
    let weatherIcon = <Sun style={{ color: '#FCD34D' }} size={32} />;

    if (info.humidity > 80 || info.weather.toLowerCase().includes('rain')) {
        imageURL = RAIN_URL;
        weatherIcon = <CloudRain style={{ color: '#60A5FA' }} size={32} />;
    } else if (info.temp <= 15 || info.weather.toLowerCase().includes('snow')) {
        imageURL = COLD_URL;
        weatherIcon = <Snowflake style={{ color: '#67E8F9' }} size={32} />;
    }

    const OWM_ICON_URL = `https://openweathermap.org/img/wn/${info.icon}@2x.png`;
    const currentTime = new Date().toLocaleTimeString();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '16px', width: '100%' }}>
            <Card sx={{ maxWidth: 450, width: '95%', boxShadow: 8, borderRadius: '12px', backdropFilter: 'blur(4px)', backgroundColor: cardBg, color: darkMode ? 'white' : '#1F2937' }}>
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="180"
                        image={imageURL}
                        alt={`Weather in ${info.city}`}
                        sx={{ objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
                    />
                    <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={OWM_ICON_URL} alt={info.weather} style={{ width: '80px', height: '80px', borderRadius: '50%', padding: '8px', backgroundColor: 'rgba(255,255,255,0.7)' }} />
                        <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mt: 1, textTransform: 'capitalize' }}>{info.weather}</Typography>
                    </Box>
                </Box>

                <CardContent>
                    <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, fontWeight: 800, mb: 2, color: primaryColor }}>
                        {info.city} {weatherIcon}
                    </Typography>

                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, color: secondaryColor }}>
                        <Box sx={{ p: 1.5, backgroundColor: detailBg, borderRadius: 1 }}>
                            <Typography variant="caption" sx={{ color: primaryColor, display: "flex", alignItems: "center" }}>
                                <Thermometer size={16} style={{ marginRight: 4 }} /> Temp
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>{info.temp.toFixed(1)}°C</Typography>
                        </Box>

                        <Box sx={{ p: 1.5, backgroundColor: detailBg, borderRadius: 1 }}>
                            <Typography variant="caption" sx={{ color: primaryColor, display: "flex", alignItems: "center" }}>
                                <Droplet size={16} style={{ marginRight: 4 }} /> Humidity
                            </Typography>
                            <Typography variant="h5">{info.humidity}%</Typography>
                        </Box>

                        <Box sx={{ p: 1.5, backgroundColor: detailBg, borderRadius: 1 }}>
                            <Typography variant="caption">Max Temp</Typography>
                            <Typography variant="subtitle1">{info.max.toFixed(1)}°C</Typography>
                        </Box>

                        <Box sx={{ p: 1.5, backgroundColor: detailBg, borderRadius: 1 }}>
                            <Typography variant="caption">Min Temp</Typography>
                            <Typography variant="subtitle1">{info.min.toFixed(1)}°C</Typography>
                        </Box>

                        <Box sx={{ p: 1.5, backgroundColor: detailBg, borderRadius: 1 }}>
                            <Typography variant="caption" sx={{ color: primaryColor, display: "flex", alignItems: "center" }}>
                                <Wind size={16} style={{ marginRight: 4 }} /> Wind Speed
                            </Typography>
                            <Typography variant="subtitle1">{info.wind.toFixed(1)} m/s</Typography>
                        </Box>

                        <Box sx={{ p: 1.5, backgroundColor: detailBg, borderRadius: 1 }}>
                            <Typography variant="caption">Pressure</Typography>
                            <Typography variant="subtitle1">{info.pressure} hPa</Typography>
                        </Box>
                    </Box>

                    <Typography sx={{ textAlign: "center", mt: 2, fontStyle: "italic", color: secondaryColor }}>
                        Feels like <span style={{ fontWeight: 700, color: primaryColor }}>{info.feelsLike.toFixed(1)}°C</span>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default InfoBox;
