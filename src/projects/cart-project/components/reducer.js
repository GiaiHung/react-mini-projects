const reducer = (state, action) => {
    switch (action.type) {

        case 'CLEAR_ITEM': return { ...state, cart: [] }

        case 'REMOVE_ITEM': return { ...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload) }

        case 'TOGGLE_AMOUNT': {
            const newCart = state.cart
            .map(cartItem => {
                if (cartItem.id === action.payload.id) {
                    if (action.payload.type === 'increase') {
                        return { ...cartItem, amount: cartItem.amount + 1 }
                    }
                    if (action.payload.type === 'decrease') {
                        return { ...cartItem, amount: cartItem.amount - 1 }
                    }
                }
                return cartItem
            })
            .filter(cartItem => cartItem.amount > 0)

            return { ...state, cart: newCart }
        }

        case 'LOADING': return {...state, loading: true}

        case 'DISPLAY_ITEMS': return {...state, cart: action.payload, loading: false}

        case 'GET_TOTALS': {
            const {amount, total} = state.cart.reduce((total, currentItem) => {
                const {price, amount} = currentItem
                total.amount += amount
                total.total += price * amount
                return total
            }, {
                amount: 0,
                total: 0
            })
            return {...state, total, amount}
        }

        default: return state
    }
}

export default reducer