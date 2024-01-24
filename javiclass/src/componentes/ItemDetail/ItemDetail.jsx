import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio {precio} </h3>
            <p>ID: {id} </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat animi vero repellat corrupti debitis voluptatem officiis, asperiores commodi est accusantium excepturi cupiditate veniam quos ipsa nemo eius a labore.</p>
            <img src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail