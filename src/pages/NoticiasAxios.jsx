import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { urlAPI } from '../constants/APIvariavel'
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

const NoticiasAxios = () => {
    
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(urlAPI)
                setNoticias(res.data)
            } catch (error) {
                console.error("Erro ao buscar as notícias: ", error)
            }
        }
        fetchData()
    }, [])

    
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>Notícias</Typography>
      <List>
        {
          noticias.map((noticia) => (
            <ListItem key={noticia.id} component={Paper} elevation={3} sx={{ mb: 2 }}>
              <ListItemText
                primary={
                  <Typography variant="h5" component={Link} to={`/visualiza-noticia/${noticia.id}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
                    {noticia.titulo}
                  </Typography>
                }
                secondary={
                  <Typography variant="subtitle1">
                    {noticia.subtitulo}
                  </Typography>
                }
              />
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default NoticiasAxios