import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Moon } from "lucide-react";
import SearchBox from "./SearchBox";

function SearchPage({ updateInfo, darkMode, toggleDarkMode }) {
    const headerColor = darkMode ? '#F472B6' : 'white'; 
    const sectionBg = darkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(236, 72, 153, 0.5)'; 
    const subtextColor = darkMode ? '#D1D5DB' : 'rgba(255, 255, 255, 0.8)';

    return (
        <Box sx={{ width: '100%', maxWidth: { xs: 380, sm: 450, lg: 550 }, p: 4, borderRadius: '24px', boxShadow: 3, backdropFilter: 'blur(8px)', height: 'fit-content', transition: 'all 0.5s ease', margin: 'auto' }}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
                <Typography variant="h2" sx={{ fontSize: { xs: '3rem', sm: '3.5rem' }, fontWeight: 900, letterSpacing: '-0.05em', textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', color: headerColor }}>
                    ClimatoSphere
                </Typography>
                <Typography variant="h6" sx={{ mt: 1, fontWeight: 300, color: subtextColor }}>Real-Time Global Weather</Typography>

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'rgba(255, 255, 255, 0.9)' }}>
                    <FormControlLabel
                        control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
                        label={<Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', fontWeight: 600, color: darkMode ? 'white' : headerColor }}><Moon size={16} style={{ marginRight: '4px' }} /> Dark Mode</Typography>}
                    />
                </Box>
            </Box>

            <Box sx={{ p: 4, borderRadius: '12px', transition: 'all 0.5s ease', backgroundColor: sectionBg }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'white', mb: 3, borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.5)', pb: 1.5, textAlign: 'center' }}>
                    Get Weather
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <SearchBox updatInfo={updateInfo} darkMode={darkMode} />
                </Box>
            </Box>
        </Box>
    );
}

export default SearchPage;
