import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


const NavBar = () => {
  return (
    <header>
        <h1>Josanba</h1>

        <nav>
            <ul>
                <li>Tractores</li>
                <li>Sembradoras</li>
                <li>Abonadoras</li>
                <li>Discos</li>
            </ul>
        </nav>
        <CartWidget></CartWidget>
        
    </header>
  )
}

export default NavBar