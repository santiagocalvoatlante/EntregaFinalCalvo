import { useState } from "react";
import "./ItemCount.css";
import Button from 'react-bootstrap/Button';


const ItemCount = ({ inicial, funcionAgregar }) => {

  const [contador, setContador] = useState(1);


  const incrementar = () => {
    setContador(contador + 1);
  }

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  }


  return (
    <>
      <div className="botones">
        <Button variant="secondary" onClick={decrementar}>-</Button>
        <p className="p-botones"> {contador} </p>
        <Button variant="secondary" onClick={incrementar}>+</Button>

      </div>
      <Button className="miBtn" variant="dark"  onClick={() => funcionAgregar(contador)}> Agregar al Carrito </Button>
    </>
  )


}

export default ItemCount


