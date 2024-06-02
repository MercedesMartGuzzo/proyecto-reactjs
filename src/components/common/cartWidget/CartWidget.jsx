import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Badge} from "@mui/material"
import React from 'react'

const Cartwidget = () => {
  return ( <Badge badgeContent={0} color="primary" showZero={true}> <AddShoppingCartIcon/></Badge>
  )
}

export default Cartwidget