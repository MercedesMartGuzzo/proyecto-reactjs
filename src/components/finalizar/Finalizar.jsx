 import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import { Context } from '../../context/Context';
import "./Finalizar.css"

const Finalizar = () => {

  const { cart, precioFinal, limpiar} = useContext(Context);

  const [pedidoId, setPedidoId] = useState("")
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
      total:precioFinal()
    }
    const pedidosRef = collection(db, "pedidos");
    addDoc(pedidosRef, pedido)
      .then((doc) => {
        setPedidoId(doc.id)
        limpiar();

      })
  }

  if (pedidoId){
    return  (
      <div className="saludo">
        <h3>¡GRACIAS POR CONFIAR EN NOSOTROS!</h3>
        <p>Numero de pedido:{pedidoId}</p>
      </div>
      
    )
  }

  return (
    <div className="wrapp-formulario container">
      <h2 className='form-titulo'>DATOS DE ENVÍOS </h2>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>

        <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
        <input type="phone" placeholder='Ingresa tu telefono'{...register("telefono")} />
        <input type="email" placeholder='Ingresa tu e-mail'{...register("e-mail")} />
        <input type="text" placeholder='Ingresa tu direccion'{...register("direccion")} />
        <input type="text" placeholder='Ingresa una descrpcion (opcional)'{...register("descripcion")} />
        <input type="text" placeholder='Pedido especial'{...register("pedidoespecial")} />
        <button className="submit" type='submit'> PEDIR </button>
      </form>
      <Link to="/" className= "btn-form">IR AL INICIO</Link>
    </div>
  )
}

export default Finalizar 