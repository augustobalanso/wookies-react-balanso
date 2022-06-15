import React from 'react'
import CartTable from '../NavBar/CartTable'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const { CartItems } = useContext(CartContext)

  let totalPrice = 0
  
  CartItems.forEach(element => {
    totalPrice += element.price
  })

  return (
    <div>
      <CartTable />
      <h1>
        Total = {totalPrice}
      </h1>
    </div>
  )
}
