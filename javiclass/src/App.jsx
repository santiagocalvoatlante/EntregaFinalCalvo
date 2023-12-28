import ProductoCard from './componentes/ProductoCard/ProductoCard';
import React from 'react'
import './App.css';
import ProdcutoBoton from './componentes/ProductoBoton/ProdcutoBoton';
import NavBar from './componentes/NavBar/NavBar';
import ItemListCointainer from './componentes/ItemListCointainer/ItemListCointainer';



const App = () => {
  return (
   <div>
    <NavBar></NavBar>
    <ProductoCard/>
    <ItemListCointainer greeting = "Bienvenidos a la Pagina" ></  ItemListCointainer >

    
    <h1>dfsfd</h1>
   </div>
    
   
     
  )
}

export default App