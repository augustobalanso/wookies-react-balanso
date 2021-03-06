import { createContext } from "react";
import useState from 'react-usestateref'
import { addDoc, collection } from 'firebase/firestore'
import db from "../Utils/firebaseConfig";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [CartTotal, setCartTotal, CartTotalRef] = useState(0)
    const [CartItems, setCartItems, CartItemsRef] = useState([])
    const [Success, setSuccess] = useState()
    const [CartOrder, setCartOrder, CartOrderRef] = useState({
            buyer: {
                name: '',
                phone: '',
                email: '',
                address: '',
                notes: ''
            },
            credcard: {
                cvc: '',
                expiry: '',
                name: '',
                number: ''
            },
            items: [],
            total: 0
            })
    

    const addProdToCart = (producto) => {
        let isInCart = CartItems.find(cartItem => cartItem.cartConfirmID === producto.cartConfirmID)
        if(!isInCart){
            setCartItems(CartItems => [...CartItems, producto]);
        } else {
            isInCart.CartQty = isInCart.CartQty+producto.CartQty
        }
        recalculateTotal()
        // setCartTotal(CartTotal+(producto.price*producto.CartQty))
    }

    const emptyOrder = () => {
        setCartOrder({
            buyer: {
                name: '',
                phone: '',
                email: '',
                address: '',
                notes: ''
            },
            credcard: {
                cvc: '',
                expiry: '',
                name: '',
                number: ''
            },
            items: [],
            total: 0
            })
    }

    const emptyCart = () => {
        setCartItems([])
    }

    const deleteItemCart = (productoID) => {
        let filteredItems = CartItems.filter(cartItem => cartItem.cartConfirmID !== productoID)
        setCartItems(filteredItems)
        recalculateTotal()
    }

    const recalculateTotal = () => {
            setCartTotal(0)
            CartItemsRef.current.forEach((element) => {
            setCartTotal(CartTotalRef.current+element.price*element.CartQty)
            })
    }

    const saveData = async (newOrder) => {
        recalculateTotal()
        const orderFirebase = collection(db,'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log('orden subida: ', orderDoc)
        setSuccess(orderDoc.id)
    }


    const data = {
        CartItems,
        CartOrder,
        CartTotal,
        CartTotalRef,
        CartOrderRef,
        Success,
        saveData,
        recalculateTotal,
        setCartTotal,
        setCartOrder,
        setCartItems,
        addProdToCart,
        emptyOrder,
        emptyCart,
        deleteItemCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext }
export default CartProvider