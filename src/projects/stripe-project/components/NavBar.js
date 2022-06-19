import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from "../context"
import logo from '../images/logo.svg'

const NavBar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  function displayMenu(e) {
    const submenu = e.target
    const text = submenu.textContent
    const position = submenu.getBoundingClientRect()
    const center = (position.left + position.right) / 2
    const bottom = position.bottom 

    openSubmenu(text, {center, bottom})
  }

  function handleSubmenu(e) {
    if(!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  } 

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className="stripe-nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>
              company
            </button>
          </li>
        </ul>

        <button className="btn signin-btn">
          Sign in
        </button>
      </div>
    </nav>
  )
}

export default NavBar
