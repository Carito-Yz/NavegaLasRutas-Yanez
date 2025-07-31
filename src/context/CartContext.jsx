import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addProductInCart = (product) => {
        const productInCart = cart.find(p => p.id === product.id);

        if (productInCart) {
            const updatedCart = cart.map(p => p.id === product.id ? { ...p, quantity: p.quantity + product.quantity }: p);
            
            setCart(updatedCart);
        } 
        else {
            setCart([...cart, product]);
        }
    };

    const totalQuantity = () => {
        const total = cart.reduce((total, product) => total + product.quantity, 0)
        return total
    }

    const totalPrice = () =>{
        const priceTotal = cart.reduce((total, product) => total + (product.price * product.quantity), 0)
        return priceTotal
    }

    const deleteProductById = (id) =>{
        const productsFilter = cart.filter((product)=> product.id !== id)
        setCart(productsFilter)
    }

    const deleteAll = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value={ {cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteAll} }>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}