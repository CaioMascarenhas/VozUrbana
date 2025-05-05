import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../assets/images/logo.png';


type HeaderProps = {
    username: string;
};

const Header: React.FC<HeaderProps> = ({ username }) => {
    const navigate = useNavigate();

    return (
        <Box display="flex" alignItems="center" px={2} py={1} bgcolor="#fff" boxShadow={1}>
            <img src={logo} alt="Logo" style={{ width: 130, marginRight: 8 }}/>
            <Box flexGrow={1} />
            <Typography variant="body2" sx={{ mr: 1 }}>
                {username}
            </Typography>
            <Button onClick={() => navigate('/userHome')} sx={{ mr: 2 }}>
                <LogoutIcon color="error" />
            </Button>
        </Box>
    );
};

export default Header;
