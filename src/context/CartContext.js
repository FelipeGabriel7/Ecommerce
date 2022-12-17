import React, { useReducer } from "react";

const StateCart = {
    products: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { ...state, products: [...state.products, action.payload] }
        case 'DELETE_ITEM':
            return { ...state, products: state.products.filter(produ => produ.id !== action.id) }
        case 'REMOVE_ALL':
            return { products: [] };
        case 'INCREMENT_PRODUCT':
            return { ...state, products: state.products.map(product => product.id === action.payload.id ? { ...product, quantity: action.payload.quantity + 1 } : product) }
        case 'DECREMENT_PRODUCT':
            return { ...state, products: state.products.map(product => product.id === action.payload.id ? { ...product, quantity: action.payload.quantity - 1 } : product) }
        default:
            return state;
    }
}

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, StateCart);


    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}