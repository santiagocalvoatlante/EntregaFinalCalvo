import React from 'react'

const Articulos = ({ img, titulo }) => {
    return (
        <article>
            <img src={img} alt={titulo}/>
            <h2> {titulo} </h2>
            <button> Leer articulo</button>
        </article>
    )
}

export default Articulos