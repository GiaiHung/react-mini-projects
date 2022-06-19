import NavBar from './components/NavBar'
import CartItem from './components/CartItem'
import LinkToHome from '../../components/LinkToHome'
import './cart.css'
import { useGlobalContext } from './components/context'

const Cart = () => {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    )
  }
  return (
    <>
      <NavBar />
      <LinkToHome />
      <CartItem />
    </>
  )
}

export default Cart
