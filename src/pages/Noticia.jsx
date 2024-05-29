import React, { useEffect, useState } from 'react'
import { urlAPI } from '../../constants/APIvariavel'
import { Link } from 'react-router-dom'

const Noticia = () => {

  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(urlAPI)
      const data = await res.json()

      setNoticias(data)
    }
    fetchData()
  }, [])

  return (
    <div>
        <h1>Noticias</h1>
        <ul>
          {
            noticias.map((noticia) => (
              <li key={noticia.id}>
                <h2><Link to={`/visualiza-noticia/${noticia.id}`}>{noticia.titulo}</Link></h2>
                <h3>{noticia}</h3>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Noticia