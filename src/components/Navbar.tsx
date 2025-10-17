import { NavLink } from 'react-router-dom'
import VariaLogo from './VariaLogo'

function Navbar() {
  return (
    <header className="App-header">
      <VariaLogo scale={1.5}/>
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