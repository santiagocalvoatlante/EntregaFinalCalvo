import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListCointainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Importamos el CarritoProvider: 
import { CarritoProvider } from './context/CarritoContext';
//envuelvan la aplicación con el CarritoProvider. 
import "./App.css"
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';
import CargarArray from './componentes/CargarArray/CargarArray';

const App = () => {
  return (
    <>
    <CargarArray></CargarArray>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/categoria/:idCategoria' element={ <ItemListContainer /> } />
            <Route path='/item/:idItem' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element = {<Cart/>} />
            <Route path='/checkout' element = {<Checkout/>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App