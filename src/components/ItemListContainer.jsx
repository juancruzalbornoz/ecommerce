import React, { useState } from 'react'
import { useEffect } from 'react';
import { listadoProductos } from '../data/asyncMock';
import ItemList from './ItemList';

const ItemListContainer = ({grettings}) => {

    const [productos, setProductos] = useState([]);
    // const [productosFetch, setProductosFetch] = useState([])

    const getProductos = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                listadoProductos.length > 0 ?
                    resolve(listadoProductos)
                    :
                    reject("No hay datos")
            }, 2000)
        })
    }

    useEffect(() => {
        getProductos()
        .then(res => setProductos(res))
        .catch(err => console.log(err))
    }, [productos])

    // useEffect(() => {
    //   fetch('../../public/data/data.json')
    //     .then(res => res.json())
    //     .then(data => setProductosFetch(data))
    //     .catch(err => console.log(err))
    // },[])
    
    console.log("productos", productos)
    // console.log("productosFetcj", productosFetch)

  return (
    <>
    {/* <h1>{grettings}</h1> */}
    <ItemList items={productos}/>
    </>
  )
}

export default ItemListContainer