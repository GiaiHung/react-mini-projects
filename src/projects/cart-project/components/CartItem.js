import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { useGlobalContext } from "./context"

const CartItem = () => {
    const { cart, total, clearItem, removeItem, toggleAmount } = useGlobalContext()

    if (cart.length === 0) {
        return (
            <div className="cart">
                <div className="cart-header">
                    <h2>Your bag</h2>
                    <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>is currently empty</p>
                </div>
            </div>
        )
    }

    return (
        <div className="cart">
            <div className="cart-header">
                <h2>Your bag</h2>
            </div>
            <div className="cart-info">
                {
                    cart.map(cartItem => {
                        const { id, title, price, img, amount, } = cartItem
                        return (
                            <article key={id} className="cart-item">
                                <img src={img} alt={title} />
                                <div className="item-content">
                                    <h4>{title}</h4>
                                    <h4>{price}</h4>
                                    <button className="item-remove" onClick={() => removeItem(id)}>Remove</button>
                                </div>
                                <div className="item-amount">
                                    <FaArrowUp onClick={() => toggleAmount(id, 'increase')}/>
                                    <h4>{amount}</h4>
                                    <FaArrowDown onClick={() => toggleAmount(id, 'decrease')}/>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>Total</h4>
                    <h4>${total.toFixed(2)}</h4>
                </div>
                <button className="clear-btn" onClick={clearItem}>
                    Clear item
                </button>
            </footer>
        </div>
    )
}

export default CartItem
