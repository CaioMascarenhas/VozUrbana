import React from 'react';
import { Card, CardHeader, CardContent, IconButton, Box, Chip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';
import Grid from '@mui/material/GridLegacy';

const images = [
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/300/0000FF',
    'https://via.placeholder.com/300/FF0000',
];

export default function PesquisaCard() {
    const [index, setIndex] = React.useState(0);

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <Grid item xs={4}>
            <Card sx={{ width: '100%', borderRadius: 2, p: 2 }}>
                <CardHeader
                    title="Pesquisa de Melhoria de Vias"
                    titleTypographyProps={{ fontSize: 16, fontFamily: 'Mulish', fontWeight: 600 }}
                    action={
                        <IconButton aria-label="refresh">
                            <RefreshIcon />
                        </IconButton>
                    }
                    sx={{ pb: 0 }}
                />
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        pt: 1,
                        height: 'calc(100% - 64px)'
                    }}
                >
                    <Box sx={{ position: 'relative', width: 200, height: 200, mb: 3 }}>
                        <Box
                            component="img"
                            src={'../../assets/images/logo.png'}
                            alt="carousel"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                border: '4px solid',
                                borderColor: 'grey.300',
                            }}
                        />
                        <IconButton
                            onClick={handlePrev}
                            size="small"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '-40px',
                                transform: 'translate(-60%, -50%)',
                                // bgcolor: 'background.paper',
                                // boxShadow: 1,
                            }}
                        >
                            <ArrowBackIosIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            onClick={handleNext}
                            size="small"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: '-40px',
                                transform: 'translate(60%, -50%)',
                                // bgcolor: 'background.paper',
                                // boxShadow: 1,
                            }}
                        >
                            <ArrowForwardIosIcon fontSize="small" />
                        </IconButton>
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                width: 32,
                                height: 32,
                                bgcolor: 'grey.900',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <StarIcon sx={{ color: 'white', fontSize: 20 }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, marginTop: 3 }}>
                        <Chip label="Há 6 dias" size="small" sx={{
                            padding: 1, '& .MuiChip-label': {
                                color: '#2C3E50',
                                fontWeight: 'bold'
                            }
                        }} />
                        <Chip label="1.200 acessos" size="small" sx={{
                            padding: 1, '& .MuiChip-label': {
                                color: '#2C3E50',
                                fontWeight: 'bold'
                            }
                        }} />
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}