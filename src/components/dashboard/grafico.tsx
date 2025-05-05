import { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import Grid from '@mui/material/GridLegacy';

// --- Tipagem dos dados ---
interface DataPoint {
  day: number;
  votes: number;
}

// --- Mock completo para cada mês ---
const sampleDataMap: Record<string, DataPoint[]> = {
  '2025-07': Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    votes: Math.floor(50 + Math.random() * 150)
  })),
  '2025-08': Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    votes: Math.floor(80 + Math.random() * 120)
  })),
  '2025-09': Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    votes: Math.floor(100 + Math.random() * 100)
  })),
};

export default function GraficoVotosPorDia() {
  const [month, setMonth] = useState<'2025-07' | '2025-08' | '2025-09'>('2025-09');

  const handleMonthChange = (e: SelectChangeEvent<string>) => {
    setMonth(e.target.value as '2025-07' | '2025-08' | '2025-09');
    // aqui você poderia disparar fetch real de dados
  };

  // pega os dados corretos conforme o mês
  const sampleData: DataPoint[] = sampleDataMap[month];

  return (
    <Grid item xs={12} sx={{ marginTop: 4 }}>
      <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: 2 }}>
        {/* Cabeçalho */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>
              VOTOS POR DIA
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Visualize a quantidade de votos diários no mês selecionado
            </Typography>
          </Box>
          <FormControl size="small">
            <InputLabel id="select-month-label">Mês/Ano</InputLabel>
            <Select
              labelId="select-month-label"
              value={month}
              label="Mês/Ano"
              onChange={handleMonthChange}
            >
              <MenuItem value="2025-07">Julho 2025</MenuItem>
              <MenuItem value="2025-08">Agosto 2025</MenuItem>
              <MenuItem value="2025-09">Setembro 2025</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Gráfico de barras */}
        <Box sx={{ width: '100%', height: 320 }}>
          <ResponsiveContainer>
            <BarChart
              data={sampleData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 12 }}
                label={{ value: 'Dia', position: 'insideBottom', offset: -5, fontSize: 14 }}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                label={{ value: 'Votos', angle: -90, position: 'insideLeft', fontSize: 14 }}
              />
              <Tooltip formatter={(value: number) => `${value} votos`} />
              <Legend verticalAlign="bottom" height={36} />
              <Bar
                dataKey="votes"
                name="Votos"
                fill="#165BAA"
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Grid>
  );
}
