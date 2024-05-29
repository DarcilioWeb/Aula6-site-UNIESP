import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { urlAPI } from '../../constants/APIvariavel';
import { Box, TextField, Typography, Button } from '@mui/material';

const CadastroNoticia = () => {
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [texto, setTexto] = useState("");

  const navigate = useNavigate();

  const CadastrarNoticia = async (e) => {
    e.preventDefault();
    try {
      await axios.post(urlAPI, { titulo, subtitulo, texto });
      navigate("/admin-noticias");
    } catch (error) {
      console.error("Erro ao cadastrar a notícia: ", error);
    }
  };

  return (
    <Box component="form" onSubmit={CadastrarNoticia} noValidate sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>Cadastrar Notícia</Typography>
      <TextField
        label="Título"
        fullWidth
        margin="normal"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <TextField
        label="Subtítulo"
        fullWidth
        margin="normal"
        value={subtitulo}
        onChange={(e) => setSubtitulo(e.target.value)}
      />
      <TextField
        label="Texto"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </Box>
  );
};

export default CadastroNoticia;
