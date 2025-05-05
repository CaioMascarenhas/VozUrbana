import React from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import PrintIcon from '@mui/icons-material/Print';
import Grid from '@mui/material/GridLegacy';

const metrics = [
    {
        title: 'Meta atingida (%)',
        value: '83%',
        subtitle: 'Nível de confiança: 95%',
        gradient: 'linear-gradient(45deg, #9F46FF 0%, #FCB4DA 30%, #FF7B6C 60%, #FFA352 90%, rgba(255,255,255,0.3) 100%)',
    },
    {
        title: 'Total de respostas',
        value: '284',
        subtitle: 'Votos',
        gradient: 'linear-gradient(45deg, #165BAA 0%, #66D9F2 100%)',
    },
];

export default function DashboardMetrics() {
    return (
        <Grid xs={8} item container sx={{height:'300px'}}>
            {metrics.map((m, idx) => (
                <Grid item xs={6} sx={{ padding: 1 }}
                >
                    <Card
                        key={idx}
                        sx={{
                            height: 273,
                            background: m.gradient,
                            color: '#FFF',
                            borderRadius: 2,
                            position: 'relative',
                        }}
                    >
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
                                    {m.title}
                                </Typography>
                                <Box
                                    sx={{
                                        bgcolor: 'rgba(255, 255, 255, 0.3)',
                                        borderRadius: 1,
                                    }}
                                >
                                    <IconButton size="small" sx={{ color: '#FFF' }}>
                                        <TimerIcon fontSize="small" />
                                    </IconButton>
                                </Box>
                            </Box>

                            <Box>
                                <Typography variant="h3" sx={{ lineHeight: 1 }}>
                                    {m.value}
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8, mt: 0.5 }}>
                                    {m.subtitle}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            <Grid item xs={12} sx={{ padding: 1 }}>
                <Card sx={{ width: '100%', bgcolor: '#F0F2F5', borderRadius: 2 }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant="subtitle1">Gerar Relatório</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Clique e selecione o tipo de filtro
                            </Typography>
                        </Box>
                        <IconButton>
                            <PrintIcon />
                        </IconButton>
                    </CardContent>
                </Card>

            </Grid>
        </Grid>
    );
}