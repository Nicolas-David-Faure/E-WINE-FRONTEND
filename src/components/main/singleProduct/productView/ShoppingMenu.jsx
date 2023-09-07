import React from 'react'
//styles
import './scss/shoppingMenu.scss'
//icons
import locationIcon from '../../../../assets/icons/location-plus.svg';

const ShoppingMenu = ( { wine } ) => {
  const winary = 'Santa rosa'
  const amount = 1
  

  return (
    <article className='shoppingMenu__main'>
      <h5>Envío gratis a todo el país</h5>

      <p>Conocé los tiempos y las formas de envío.</p>

      <p><img src={locationIcon} />Calcular cuándo llega</p>

      <a>{winary}</a>

      <p>Hace Factura A</p>
       <div>   
          <p>Stock disponible</p>
          <p>Cantidad:</p>
          <p>{amount} unidades</p>
          <p>(193 disponibles)</p>
        </div> 
            <button>Comprar Ahora</button>
            <button>Añadir al carrito</button>
      <p><a>Compra Protegida</a>, recibí el producto que esperabas o te devolvemos tu dinero.</p>
      <span>E-Wine Points: <p>Sumás 1660 puntos.</p></span> 
    </article>
  )
}

export default ShoppingMenu



/*
Envío gratis a todo el país

Conocé los tiempos y las formas de envío.

Calcular cuándo llega
Simmons
Tienda oficial
+1000 ventas

Hace Factura A

Stock disponible


Cantidad:
1 unidad
(193 disponibles)

Comprar ahora

Agregar al carrito
Compra ProtegidaSe abrirá en una nueva ventana, recibí el producto que esperabas o te devolvemos tu dinero.

Mercado PuntosSe abrirá en una nueva ventana. Sumás 1660 puntos.

*/
