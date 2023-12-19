import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    
    <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <Link to="/" className="nav__link">
          Home
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/about" className="nav__link">
          About Me
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/projects" className="nav__link  ">
          My Projects
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/contact" className="nav__link ">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
 





    
  )
}

export default Navbar