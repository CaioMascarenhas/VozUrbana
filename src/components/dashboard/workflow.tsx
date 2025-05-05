import React from 'react';
import { Box, Typography, IconButton, List, ListItem, ListItemText, Divider, Stack, LinearProgress, Avatar } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LaunchIcon from '@mui/icons-material/Launch';
import Grid from '@mui/material/GridLegacy'

// Dados de exemplo
const meetings = [
    { day: 'ter, 11 jun', time: '08:30', title: 'Reunião com Diretor', provider: 'Google Meet', avatar: 'https://www.gstatic.com/meet/google_meet_marketsquare_53_2x.png' },
    { day: 'ter, 11 jun', time: '09:30', title: 'Reunião com Estagiário', provider: 'Google Meet', avatar: 'https://www.gstatic.com/meet/google_meet_marketsquare_53_2x.png' },
    { day: 'ter, 11 jun', time: '10:30', title: 'Reunião com Diretor', provider: 'Google Meet', avatar: 'https://www.gstatic.com/meet/google_meet_marketsquare_53_2x.png' },
    { day: 'ter, 11 jun', time: '11:30', title: 'Reunião com Estagiário', provider: 'Google Meet', avatar: 'https://www.gstatic.com/meet/google_meet_marketsquare_53_2x.png' },
];

const progressAreas = [
    { label: 'Esportes', value: 65 },
    { label: 'Meditação', value: 45 },
    { label: 'Psicólogo', value: 70 },
    { label: 'Educação', value: 90 },
    { label: 'Tarefas', value: 65 },
];

export default function WorkflowAndProgress() {
    return (
        <>
            {/* Fluxo de Trabalho sem Card */}
            <Grid item xs={12} sx={{padding:2}}>
                <Box >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 900 }} className='TEXTO'>Fluxo de Trabalho</Typography>
                            <Typography variant="body2" color="text.secondary">Agenda do dia</Typography>
                        </Box>
                        <IconButton size="small">
                            <CalendarTodayIcon />
                        </IconButton>
                    </Box>

                    <List disablePadding>
                        {meetings.map((m, idx) => (
                            <React.Fragment key={idx}>
                                <ListItem disableGutters sx={{ py: 0.5 }}>
                                    <ListItemText
                                        primary={
                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                {`${m.day} ${m.time}`}
                                            </Typography>
                                        }
                                        secondary={
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Typography variant="body2">{m.title}</Typography>
                                                <Avatar src={m.avatar} sx={{ width: 16, height: 16 }} />
                                                <Typography variant="caption" color="text.secondary">{m.provider}</Typography>
                                            </Box>
                                        }
                                    />
                                    <IconButton size="small">
                                        <LaunchIcon fontSize="small" />
                                    </IconButton>
                                </ListItem>
                                {idx < meetings.length - 1 && <Divider component="li" />}
                            </React.Fragment>
                        ))}
                    </List>

                    <Box sx={{ textAlign: 'center', mt: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, cursor: 'pointer' }}>Ver Todas &gt;</Typography>
                    </Box>
                </Box>
            </Grid>

            {/* Áreas Desenvolvidas sem Card */}
            <Grid item xs={12} sx={{padding:2}}>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }} className='TEXTO'>Áreas Desenvolvidas</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Lorem ipsum lorem ipsum lorem</Typography>
                    <Stack spacing={1}>
                        {progressAreas.map((area, i) => (
                            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="body2" sx={{ flex: '0 0 120px' }}>{area.label}</Typography>
                                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={area.value}
                                        sx={{
                                            flexGrow: 1,
                                            height: 8,
                                            borderRadius: 1,
                                            backgroundColor: '#E0E0E0',
                                            '& .MuiLinearProgress-bar': { backgroundColor: '#EB8900' }
                                        }}
                                    />
                                    <Typography variant="body2" sx={{ width: 30, textAlign: 'right' }}>{`${area.value}%`}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Grid>
        </>
    );
}
