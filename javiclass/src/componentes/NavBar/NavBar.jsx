import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <header className='miNavBar'>
      <Link to="/">
        <h1>JAVSHOES</h1>
      </Link>

      <nav>
        <ul className='miLista'>
          <li>
            <NavLink to="categoria/1">
              Running
            </NavLink>
          </li>

          <li>
            <NavLink to="categoria/2">
              Deporte
            </NavLink>
          </li>

          <li>
            <NavLink to="categoria/3">
              Urbano
            </NavLink>
          </li>

          <li>
            <NavLink to="categoria/4">
              Moda
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget></CartWidget>

    </header>
  )
}

export default NavBar