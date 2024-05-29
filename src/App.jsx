import React from 'react'
import Lgpd from './pages/Lgpd'
import Inicial from './pages/Inicial'
import Afaculdade from './pages/Afaculdade'
import NoticiasAxios from './pages/NoticiasAxios'
import VisualizaNoticia from './pages/VisualizaNoticia'
import AdminNoticias from './pages/admin/AdminNoticias'
import CadastroNoticia from './pages/admin/CadastroNoticia'
import EditarNoticia from './pages/admin/EditarNoticia'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Box } from '@mui/material'



const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
          <img src='uniesp.jpg' width={100} height={100} alt="Uniesp Logo" />
          <Navbar />
        </Box>
        <Box mt={4}>
          <Routes>
            <Route path='/' element={<Inicial />} />
            <Route path='/a-faculdade' element={<Afaculdade />} />
            <Route path='/dpo-lgpd' element={<Lgpd />} />
            <Route path='/noticias' element={<NoticiasAxios />} />
            <Route path='/visualiza-noticia/:id' element={<VisualizaNoticia />} />
            <Route path="/admin-noticias" element={<AdminNoticias />} />
            <Route path="/cadastrar-noticia" element={<CadastroNoticia />} />
            <Route path="/editar-noticia/:id" element={<EditarNoticia />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  )
}

export default App