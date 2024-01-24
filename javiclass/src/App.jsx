import ProductoCard from './componentes/ProductoCard/ProductoCard';
import React from 'react'
import './App.css';
import ProdcutoBoton from './componentes/ProductoBoton/ProdcutoBoton';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListCointainer/ItemListContainer';
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal';
import ItemCount from './componentes/ItemCount/ItemCount';
import Vista from './componentes/Vista/Vista';
import Articulos from './componentes/Articulos/Articulos';
import Promesas from './componentes/Promesas/Promesas';
import Map from './componentes/Map/Map';
import Item from './componentes/Item/Item';
import ItemList from './componentes/ItemList/ItemList';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element= {<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element= {<ItemListContainer />} />
          <Route path='/item/:idItem' element= {<ItemDetailContainer />} />
         
        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default App