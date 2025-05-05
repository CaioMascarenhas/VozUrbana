import {
    AppBar,
    Tabs,
    Tab,
    Typography,
    IconButton,
    useMediaQuery,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    Box
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const routes = [
    { label: "Inicio", path: "/" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Pesquisas", path: "/userHome" },
    { label: "Palavras-Chave", path: "/palavras-chave" },
    { label: "Usuários", path: "/usuarios" },
];

const NewHeader = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const currentTabIndex = routes.findIndex(route => route.path === location.pathname); // pega qual o indice para o tab ativo

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        navigate(routes[newValue].path);
    };

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const handleDrawerClick = (path: string) => {
        navigate(path);
        setDrawerOpen(false);
    };

    const handleLogout = () => {
        console.log("Logoff");
        // tirar o token de login aqui
        setDrawerOpen(false);
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: "white", color: "black", px: 2, py: 1 }}>
                <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                    {isMobile ? (
                        <>
                            {/* menu icon à esquerda */}
                            <IconButton onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                            {/* logo à direita */}
                            <Box ml="auto">
                                <img src="/IconeVozUrb.png" alt="Logo" style={{ height: 40 }} />
                            </Box>
                        </>
                    ) : (
                        <>
                            {/* logo */}
                            <Box display="flex" alignItems="center">
                                <img src="/IconeVozUrb.png" alt="Logo" style={{ height: 40 }} />
                            </Box>

                            {/* tabs */}
                            <Tabs
                                value={currentTabIndex}
                                onChange={handleTabChange}
                                textColor="inherit"
                                indicatorColor="primary"
                            >
                                {routes.map((route, idx) => (
                                    <Tab key={idx} label={route.label} />
                                ))}
                            </Tabs>

                            {/* usuário + logout */}
                            <Box display="flex" alignItems="center" gap={1}>
                                <Typography>Administrator</Typography>
                                <IconButton onClick={handleLogout}>
                                    <LogoutIcon color="error" />
                                </IconButton>
                            </Box>
                        </>
                    )}
                </Box>
            </AppBar>

            {/* Drawer para mobile */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" onKeyDown={toggleDrawer(false)}>
                    <List>
                        {routes.map((route, idx) => (
                            <ListItem component="button" key={idx} onClick={() => handleDrawerClick(route.path)}
                                sx={{
                                    cursor: 'pointer',
                                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
                                }}>
                                <ListItemText primary={route.label} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    {/* logout dentro do drawer */}
                    <List>
                        <ListItem
                            component="button"
                            onClick={handleLogout}
                            sx={{
                                cursor: 'pointer',
                                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
                            }}
                        >
                            <LogoutIcon color="error" sx={{ mr: 1 }} />
                            <ListItemText primary="Sair" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default NewHeader;
