import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoBox from "./InfoBox";

export default function ResultsPage({ info, darkMode, setView }) {
    const headerColor = darkMode ? '#F472B6' : '#1F2937';
    const sectionBg = darkMode ? 'rgba(55, 65, 81, 0.7)' : 'rgba(245, 245, 245, 0.7)';
    const secondaryColor = darkMode ? '#9CA3AF' : '#374151';

    const formatTime = (unix) => {
        const date = new Date(unix * 1000);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 700, p: { xs: 2, sm: 4 }, margin: 'auto' }}>
            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <IconButton onClick={() => setView('search')} sx={{ color: darkMode ? '#F472B6' : '#374151', mr: 2 }}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h4" sx={{ fontWeight: 700, color: headerColor }}>
                    Weather in {info.city}
                </Typography>
            </Box>

            {/* Main Info Card */}
            <Box sx={{ p: 2, borderRadius: 2, backgroundColor: sectionBg, mb: 3 }}>
                <InfoBox info={info} darkMode={darkMode} />
            </Box>

            {/* Additional Weather Details */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr' }, gap: 2 }}>
                <Box sx={{ p: 2, borderRadius: 2, backgroundColor: sectionBg }}>
                    <Typography variant="caption" sx={{ color: secondaryColor }}>Pressure</Typography>
                    <Typography variant="h6">{info.pressure} hPa</Typography>
                </Box>

                <Box sx={{ p: 2, borderRadius: 2, backgroundColor: sectionBg }}>
                    <Typography variant="caption" sx={{ color: secondaryColor }}>Wind Speed</Typography>
                    <Typography variant="h6">{info.wind ? info.wind.toFixed(1) : 0} m/s</Typography>
                </Box>

                <Box sx={{ p: 2, borderRadius: 2, backgroundColor: sectionBg }}>
                    <Typography variant="caption" sx={{ color: secondaryColor }}>Cloudiness</Typography>
                    <Typography variant="h6">{info.clouds}%</Typography>
                </Box>

                <Box sx={{ p: 2, borderRadius: 2, backgroundColor: sectionBg }}>
                    <Typography variant="caption" sx={{ color: secondaryColor }}>Visibility</Typography>
                    <Typography variant="h6">{info.visibility} m</Typography>
                </Box>

                <Box sx={{ p: 2, borderRadius: 2, backgroundColor: sectionBg }}>
                    <Typography variant="caption" sx={{ color: secondaryColor }}>Sunrise</Typography>
                    <Typography variant="h6">{formatTime(info.sunrise)}</Typography>
                </Box>

                <Box sx={{ p: 2, borderRadius: 2, backgroundColor: sectionBg }}>
                    <Typography variant="caption" sx={{ color: secondaryColor }}>Sunset</Typography>
                    <Typography variant="h6">{formatTime(info.sunset)}</Typography>
                </Box>
            </Box>
        </Box>
    );
}
