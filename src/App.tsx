import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/mui';
import ServidoresLogin from './pages/servidoresLogin';
import UserHome from './pages/userHome';
import Chatbot from './pages/Chatbot';
import Dashboard from './pages/dashboard';
import AppLayout from './pages/Layout';
import Users from './pages/users';
import KeyWords from './pages/KeyWords';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servidores" element={<ServidoresLogin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/chatbot' element={<Chatbot />} />
          <Route path='/' element={<AppLayout />} >
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/usuarios' element={<Users />} />
            <Route path='/palavras-chave' element={<KeyWords />} />
            <Route path='/userHome' element={<UserHome />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
