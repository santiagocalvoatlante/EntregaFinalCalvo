import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
//Importamos el CarritoContext: 
import { CarritoContext } from '../../context/CarritoContext';
//Importo el Hook useContext: 
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, stock, precio, img, desc }) => {
  //Creamos  un estado local con la cantidad de productos agregados. 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  ////clase 11 - Context

  const {agregarAlCarrito} = useContext(CarritoContext);


  ///////////////////////////////////////////////////////////
  //Creamos una función manejadora de la cantidad

  const manejadorCantidad =  (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad);

    //Ahora voy a crear un objeto con el item y la cantidad
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2> {nombre} </h2>
      <h3>$ {precio} </h3>
      {/* <p>ID: {id} </p>
      <p>Stock: {stock} </p> */}
      <p> {desc} </p>
      <img src={img} alt={nombre} />

      {
        /// Acá empleamos la lógica de montaje y desmontaje del contador
      }

      {
        agregarCantidad > 0 ? (<Link className='miBtn' to="/cart"> Terminar compra</Link>) : (<ItemCount inicial = {1} funcionAgregar = {manejadorCantidad} />)
      }


    </div>
  )
}

export default ItemDetail