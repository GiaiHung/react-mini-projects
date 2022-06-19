import { BsFillBagFill } from 'react-icons/bs'
import { useGlobalContext } from "./context"

const NavBar = () => {
  const { amount } = useGlobalContext()
  return (
    <nav>
      <div className="nav-center">
        <h2>Cart</h2>
        <div className="nav-icon">
          <BsFillBagFill />
          <p className="icon-info">{amount}</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
