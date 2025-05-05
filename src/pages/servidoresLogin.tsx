import { Box, TextField, Typography, Button, Link } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServidoresLogin = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const Navigate = useNavigate();


    return (
        <Box
            sx={{
                minHeight: '100vh',
                width: '100%',
                backgroundColor: '#E8F6FB',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                px: 2,
            }}
        >
            {/* Camada Azul - topo */}
            <Box
                component="img"
                src="/Camada_1.png"
                alt="Topo Decorativo"
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: { xs: '60%', md: '40%' },
                    maxWidth: 456,
                }}
            />

            {/* Conteúdo central */}
            <Box sx={{ zIndex: 2, textAlign: 'center', maxWidth: 380, width: '100%', paddingBottom: '150px' }}>
                <Typography sx={{ color: '#077ABD', fontSize: 64, fontWeight: 800 }}>
                    Voz
                </Typography>
                <Typography sx={{ color: '#F7A400', fontSize: 64, fontWeight: 800 }}>
                    URBANA
                </Typography>

                <TextField
                    fullWidth
                    placeholder="Email"
                    sx={{ mt: 3, backgroundColor: '#fff', borderRadius: 1 }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    type="password"
                    placeholder="Senha"
                    sx={{ mt: 2, backgroundColor: '#fff', borderRadius: 1 }}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <Button
                    variant="contained"
                    sx={{
                        mt: 3,
                        borderRadius: 50,
                        backgroundColor: '#077ABD',
                        height: 50,
                        fontWeight: 'bold',
                    }}
                    fullWidth
                    onClick={() => Navigate('/dashboard')}
                >
                    ENTRAR
                </Button>

                <Link href="#" underline="hover" sx={{ mt: 1.5, display: 'block', color: '#077ABD' }}>
                    esqueceu a senha?
                </Link>
            </Box>

            {/* Rodapé - grupo de pessoas */}
            <Box
                component="img"
                src="/Group10.png"
                alt="Grupo de Pessoas"
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 1,
                    //   height:'300px'
                }}
            />
        </Box>
    );
};

export default ServidoresLogin;
