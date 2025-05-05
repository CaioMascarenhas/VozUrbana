import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

interface RowData {
  id: string;
  title: string;
  details: string;
  status: string;
  endDate: Date;
}

const StatusChip = styled(Chip)(({ theme }) => ({
  fontWeight: 'bold',
  color: 'white',
  borderRadius: '4px',
  whiteSpace: 'nowrap',
}));

function createData(
  id: string,
  title: string,  
  details: string,
  status: string,
  endDate: Date
): RowData {
  return { id, title, details, status, endDate };
}

const today = new Date();
const futureDate = new Date();
futureDate.setDate(today.getDate() + 10);
const priorityDate = new Date();
priorityDate.setDate(today.getDate() + 3);

const initialRows: RowData[] = [
  createData('1', 'TITULO1', 'Tema da votação 1', 'Aberto', futureDate),
  createData('2', 'TITULO2', 'Tema da votação 2', 'Fechado', new Date('2023-01-01')),
  createData('3','TITULO3', 'Tema da votação 3', 'Aberto', priorityDate),
  createData('4','TITULO4', 'Tema especial', 'Fechado', new Date('2023-02-01')),
  createData('5','TITULO5', 'Tema urgente', 'Aberto', new Date(today.getTime() + (2 * 24 * 60 * 60 * 1000))),
  createData('6','TITULO6', 'Tema importante', 'Aberto', futureDate),
  createData('7','TITULO7', 'Tema teste', 'Fechado', new Date('2023-03-01')),
  createData('8','TITULO8', 'Tema de pesquisa', 'Aberto', priorityDate),
  createData('9','TITULO9', 'Outro tema', 'Fechado', new Date('2023-04-01')),
  createData('10','TITULO10', 'Último tema', 'Aberto', new Date(today.getTime() + (6 * 24 * 60 * 60 * 1000))),
];

export default function UserTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const navigate = useNavigate();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isPriority = (endDate: Date): boolean => {
    const today = new Date();
    const timeDiff = endDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff <= 5 && daysDiff >= 0;
  };

  const filteredRows = initialRows.filter((row) => {
    const matchesSearch = row.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'all' || row.status === statusFilter;
    
    let matchesPriority = true;
    if (priorityFilter !== 'all') {
      const isHighPriority = isPriority(row.endDate);
      matchesPriority = priorityFilter === 'high' ? isHighPriority : !isHighPriority;
    }
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const currentRows = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const renderStatus = (status: string, endDate: Date) => {
    const isHighPriority = status === 'Aberto' && isPriority(endDate);
    
    if (status === 'Aberto') {
      return (
        <StatusChip 
          label={isHighPriority ? 'PRIORIDADE' : status} 
          style={{ backgroundColor: isHighPriority ? '#ff5722' : '#4caf50' }} 
        />
      );
    } else {
      return (
        <StatusChip 
          label={status} 
          style={{ backgroundColor: '#f44336' }} 
        />
      );
    }
  };

  const handleRowClick = (row: RowData) => {
    setTimeout(() => {
      navigate(`/chatbot`, {
        state: { pesquisaData: row }
      });
    }, 150);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ p: 2, display: 'flex', gap: 2 }}>
        <TextField
          label="Pesquisar"
          variant="outlined"
          size="small"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setPage(0);
          }}
        />
        <TextField
          select
          label="Status"
          variant="outlined"
          size="small"
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(0);
          }}
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="all">Todos</MenuItem>
          <MenuItem value="Aberto">Aberto</MenuItem>
          <MenuItem value="Fechado">Fechado</MenuItem>
        </TextField>
        <TextField
          select
          label="Prioridade"
          variant="outlined"
          size="small"
          value={priorityFilter}
          onChange={(e) => {
            setPriorityFilter(e.target.value);
            setPage(0);
          }}
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="all">Todas</MenuItem>
          <MenuItem value="high">Alta</MenuItem>
          <MenuItem value="normal">Normal</MenuItem>
        </TextField>
      </Box>
      
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>TITULO</TableCell>
              <TableCell>DETALHES</TableCell>
              <TableCell align="center">STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.map((row, index) => (
              <TableRow
                key={`${row.details}-${index}`}
                sx={{ 
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:hover': { 
                    backgroundColor: row.status === 'Fechado' ? 'inherit' : 'rgba(0, 0, 0, 0.04)',
                    cursor: row.status === 'Fechado' ? 'not-allowed' : 'pointer',
                  },
                  opacity: row.status === 'Fechado' ? 0.7 : 1,
                }}
                onClick={() => handleRowClick(row)}
              >
                <TableCell component="th" scope="row">{row.title}</TableCell>
                <TableCell>{row.details}</TableCell>
                <TableCell align="center">
                  {renderStatus(row.status, row.endDate)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Linhas por página:"
        labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
      />
    </Paper>
  );
}