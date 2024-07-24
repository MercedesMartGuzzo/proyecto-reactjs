import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
/* import {Badge} from "@mui/material" */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../context/Context';
import "./CartWidget.css"


const CartWidget = () => {
  const {cart} =useContext(Context)
  const { qty } = cart;
  

  return (
    <div >
      <Link to="/carrito">  
      <div  className='cartWidget'>
   <AddShoppingCartIcon/>
      <span> {qty}</span></div>
      </Link> 
      </div>
  )
}

export default CartWidget













