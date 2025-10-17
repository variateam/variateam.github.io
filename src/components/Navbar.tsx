import { NavLink } from 'react-router-dom'
import VariaLogo from './varia.svg'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className="App-header">
      <img src={VariaLogo} className={styles.logo}/>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;