import React, { useContext, useReducer } from 'react'
import reducer from './reducer'
import cartItems from './data'
import { useEffect } from 'react'

const URL = 'https://course-api.com/react-useReducer-cart-project'
const initialState = {
    loading: false,
    cart: cartItems,
    amount: 0,
    total: 0
}

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const clearItem = () => {
        dispatch({ type: 'CLEAR_ITEM' })
    }

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }

    const toggleAmount = (id, type) => {
        dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
    }

    const fetchCarts = async () => {
        dispatch({ type: 'LOADING' })
        const response = await fetch(URL)
        const data = await response.json()
        dispatch({ type: 'DISPLAY_ITEMS', payload: data })
    }

    useEffect(() => {
        fetchCarts()
    }, [])

    useEffect(() => {
        dispatch({type: 'GET_TOTALS'})
    }, [state.cart])

    return (
        <AppContext.Provider value={{
            ...state,
            clearItem,
            removeItem,
            toggleAmount
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }