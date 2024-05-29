import React, { useEffect, useState } from 'react'
import { Box, Typography, Paper } from '@mui/material'
import { useParams } from 'react-router-dom'

const VisualizaNoticia = () => {

    const { id } = useParams()

    const url = `http://localhost:3000/noticias/${id}`

    const [visualizaNoticia, SetVisualizaNoticia] = useState({})

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url)
            const data = await res.json()

            SetVisualizaNoticia(data)
        }
        fetchData()
    }, [id])
  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>{visualizaNoticia.titulo}</Typography>
        <Typography variant="h6" gutterBottom>{visualizaNoticia.subtitulo}</Typography>
        <Typography variant="body1">{visualizaNoticia.texto}</Typography>
      </Paper>
    </Box>
  )
}

export default VisualizaNoticia