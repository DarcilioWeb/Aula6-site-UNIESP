import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { urlAPI } from '../../constants/APIvariavel'
import { Typography, Button, List, ListItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

const url = "http://localhost:3000/noticias"

const AdminNoticias = () => {

    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(url)
                setNoticias(res.data)
            } catch (error) {
                console.error("Erro ao buscar as notícias: ", error)
            }
        }
        fetchData()
    }, [])

    const removerNoticia = async (id) => {
        try {
            await axios.delete(`${url}/${id}`)
            setNoticias(noticias.filter(noticia => noticia.id !== id))
        } catch (error) {
            console.error("Erro ao remover a noticia ", error)
        }
    }


  return (
    <div>
      <Typography variant="h4" gutterBottom>Gerenciar Notícias</Typography>
      <Button variant="contained" color="primary" component={Link} to="/cadastrar-noticia">
        Cadastrar Nova Notícia
      </Button>
      <List>
        {noticias.map((noticia) => (
          <ListItem key={noticia.id} divider>
            <ListItemText
              primary={noticia.titulo}
              secondary={noticia.subtitulo}
            />
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={`/editar-noticia/${noticia.id}`}
            >
              Editar
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => removerNoticia(noticia.id)}
              style={{ marginLeft: '10px' }}
            >
              Remover
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default AdminNoticias