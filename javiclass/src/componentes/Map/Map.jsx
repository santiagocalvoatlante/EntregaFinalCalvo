import React from 'react'

const Map = () => {

    const productos = [
        {id:1, nombre: "Zapatillas Adidas Alphaboost V2", precio: 1000 },
        {id:2, nombre: "Zapatillas Adidas Ozelle", precio: 2000 },
        {id:3, nombre: "Zapatillas Nike Air Max Systm", precio: 3000 },
        {id:4, nombre: "Zapatillas Converse All Star BB Prototype CX Mid Textil", precio: 4000 },
    ]
  return (
    <div>
<h2>Deporte</h2>
<ul>
    {
        productos.map( (producto, indice) => (
        <li key={indice}>
            <span> {producto.nombre} </span>
            <span> {producto.precio} </span>
        </li>
        ))
    }
</ul>
    </div>
  )
}

export default Map