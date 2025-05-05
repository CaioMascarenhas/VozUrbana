import { Typography, Box, Button, Divider } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const RightContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  backgroundImage: `url('/image.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  padding: theme.spacing(4),
  color: '#333',
  overflow: 'hidden',
}));


const Home = () => {

  const navigate = useNavigate();


  return (
    <Grid container sx={{ height: '100vh' }}>
      {/* LADO ESQUERDO */}
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E8F6FB',
        }}
      >
        <Box sx={{ textAlign: 'center', p: 16 }}>
          <Typography sx={{ color: '#077ABD', fontSize: 48, fontWeight: 800 }} className="Mulish">
            Voz
          </Typography>
          <Typography sx={{ color: '#F7A400', fontSize: 48, fontWeight: 800 }} className="Mulish">
            URBANA
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#A7A7A7', fontSize: 20 }}>
            Sistema de Gestão de Macro e Micro Tarefas
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Button
            sx={{
              mb: 2,
              borderRadius: 200,
              backgroundColor: '#077ABD',
              color: 'white',
              width: 380,
              height: 55,
              fontSize: 18,
              fontWeight: 800,
            }}
            onClick={() => navigate('/userHome')}
            variant="contained"
          >
            PESQUISAS
          </Button>
          <Button
            sx={{
              borderRadius: 200,
              color: '#077ABD',
              borderColor: '#077ABD',
              width: 380,
              height: 55,
              fontSize: 18,
              fontWeight: 800,
            }}
            onClick={() => navigate('/servidores')}
            variant="outlined"
          >
            ACESSO PARA SERVIDORES
          </Button>
        </Box>
      </Grid>

      {/* LADO DIREITO */}
      <Grid item xs={12} md={7}>
        <RightContainer>
          {/* Camada translúcida sobre a imagem */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(241, 241, 241, 0.3)',
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              padding: 5,
              borderRadius: 3,
              maxWidth: 700,
              width: '100%',
              zIndex: 2,
              marginLeft: 'auto',
            }}
          >
            <Typography
              sx={{ fontWeight: 700, fontSize: 40, textAlign: 'right' }}
              className="Texto Inter"
            >
              SOBRE O SISTEMA
            </Typography>
            <Typography
              sx={{ mt: 1, fontSize: 20, textAlign: 'left' }}
              className="Texto Inter"
            >
              Uma plataforma inovadora que conecta tecnologia e população para criar novas possibilidades.
              Nosso sistema de votação integrado com chat foi desenvolvido para otimizar a gestão dos votos,
              garantindo mais transparência, eficiência e reduzindo significativamente o risco de erros humanos.
            </Typography>
          </Box>

        </RightContainer>
      </Grid>
    </Grid>
  );
};

export default Home;
