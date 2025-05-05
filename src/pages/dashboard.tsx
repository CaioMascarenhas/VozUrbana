import { JSX, useState } from "react";
import {
    Box,
    Drawer,
    IconButton,
    Button,
    Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/GridLegacy"
import PesquisaCard from "../components/dashboard/pesquisacard";
import DashboardMetrics from "../components/dashboard/metrics";
import Grafico from "../components/dashboard/grafico";
import WorkflowAndProgress from "../components/dashboard/workflow";

type MenuItem = {
    text: string;
    icon: JSX.Element;
    content: JSX.Element;
};

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate()

    const menuItems: MenuItem[] = [
        {
            text: "Início",
            icon: <HomeIcon />,
            content: <Typography variant="h4">Bem-vindo ao Início!</Typography>,
        },
        {
            text: "Usuários",
            icon: <GroupsIcon />,
            content: <Typography variant="h4">Lista de Usuários</Typography>,
        },
        {
            text: "Conceito A",
            icon: <HomeIcon />,
            content: <Typography variant="h4">Conceito A detalhado</Typography>,
        },
        {
            text: "Conceito B",
            icon: <HomeIcon />,
            content: <Typography variant="h4">Conceito B detalhado</Typography>,
        },
        {
            text: "Conceito C",
            icon: <HomeIcon />,
            content: <Typography variant="h4">Conceito C detalhado</Typography>,
        },
        {
            text: "Configurações",
            icon: <SettingsIcon />,
            content: <Typography variant="h4">Página de Configurações</Typography>,
        },
    ];

    return (
        <Grid container sx={{ display: "flex" }}>
            {/* Ícone do menu */}
            {/* <IconButton
                onClick={() => setOpen(true)}
                sx={{ position: "absolute", top: 16, left: 16, zIndex: 10 }}
            >
                <MenuIcon />
            </IconButton> */}

            {/* Drawer */}
            <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 300,
                        bgcolor: "#f8f9fc",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        pt: 2,
                        pb: 2,
                    },
                }}
            >
                {/* Logo */}
                <Box display="flex" justifyContent="center" mb={2}>
                    <img src="/IconeVozUrb.png" alt="Logo" />
                </Box>

                {/* Botões de navegação */}
                <Box display="flex" flexDirection="column" alignItems="center" flexGrow={1} gap={1} sx={{ paddingTop: 10 }}>
                    {menuItems.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => {
                                setSelectedIndex(index);
                                setOpen(false);
                            }}
                            startIcon={item.icon}
                            sx={{
                                justifyContent: "flex-start",
                                width: "60%",
                                color: selectedIndex === index ? "#fff" : "#555",
                                bgcolor: selectedIndex === index ? "#F28C1D" : "transparent",
                                "& .MuiSvgIcon-root": {
                                    color: selectedIndex === index ? "#fff" : "#888",
                                },
                                borderRadius: 10,
                                textTransform: "none",
                                px: 2,
                            }}
                        >
                            {item.text}
                        </Button>
                    ))}
                </Box>

                {/* Rodapé */}
                <Box textAlign="center" mt="auto">
                    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", gap: 1, paddingBottom: 2}}>
                        <Typography>Administrador</Typography>
                        <IconButton onClick={() => navigate('/')}>
                        <LogoutIcon color="error" />

                        </IconButton>
                    </Box>
                </Box>
            </Drawer>

            {/* Conteúdo principal */}
            {/* <Box sx={{ flexGrow: 1, p: 10 }}>
                {menuItems[selectedIndex].content}
            </Box> */}

            {/* <DashboardHome /> */}

            <Grid item container xs={12} sx={{ padding: '20px 40px', borderRight: '1px solid #ccc' }}>
                <PesquisaCard/>
                <DashboardMetrics />
                <Grafico />
            </Grid>
            {/* <Grid item container xs={4} sx={{ padding: 1 }}>
                <WorkflowAndProgress />
            </Grid> */}


        </Grid>
    );
};

export default Dashboard;
