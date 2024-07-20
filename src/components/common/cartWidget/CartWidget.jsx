import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Badge} from "@mui/material"
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../context/Context';



const CartWidget = () => {
  const {cart} =useContext(Context)
  const { qty } = cart;
  

  return (
    <div>
      <Link to="/carrito">  
      <Badge badgeContent={0} color="primary" showZero={true}> <AddShoppingCartIcon/></Badge>
      <h5>Cantidad: {qty}</h5>

      </Link> 

    </div>

  )
}

export default CartWidget













