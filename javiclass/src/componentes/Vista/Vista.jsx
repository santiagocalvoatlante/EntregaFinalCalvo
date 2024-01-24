/* import React from 'react' */
import { useState } from "react"
import './Vista.css';

const Vista = () => {
    const [modo, setModo] = useState(false);
 
    const cambiarModo = () => {
        setModo(!modo)
        }
 
     const estilo = modo ? "oscuro" : "claro";    
  return (
    <div className={estilo}>
        <button onClick={cambiarModo}>Cambiar modo</button>
        <h2>Componente Vista</h2>
    </div>
  )
}

export default Vista