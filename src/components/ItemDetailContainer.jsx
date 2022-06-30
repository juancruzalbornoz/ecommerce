import React, { useEffect, useState } from 'react'
import { listadoProductos } from '../data/asyncMock.jsx';
import ItemDetail from './ItemDetail.jsx';

const getProducto = (id) => {
    return new Promise ((resolve, reject) => {
        console.log(id)
        setTimeout(() => {
            const itemFound = listadoProductos.find( (item) => {
                return id === item.id
            })
            console.log(itemFound)
            resolve(itemFound)
        }, 2000)
    })
}

const ItemDetailContainer = ({id}) => {
    console.log(id)

    const [producto, setProducto] = useState([]);    

    useEffect(()=> {
        getProducto(id).then( respuestaPromise => {
            setProducto(respuestaPromise)
            }
        )
    }, [])

    console.log (producto)
  return (
    <>
        <ItemDetail item={producto}/>
    </>
    //tiene que llamar a item list con listadoProductos={productos}
  )
}

export default ItemDetailContainer