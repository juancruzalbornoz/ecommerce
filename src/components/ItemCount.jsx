import React, { useState, useEffect } from "react";
import "./ItemCount.css";
import Swal from 'sweetalert2';

function ItemCount({ stock, initial, onAdd }) {
    const [num, setNum] = useState(initial);

    useEffect(()=>{
        if(num === stock - 2){
            Swal.fire({
                title: 'Atencion!',
                text: 'Quedan pocas unidades',
                icon: 'warning',
                timer: 2000
              });
        }
    }, [num, stock])

    const sumar = () => {
        if( num < stock ){
            setNum(num + 1);
        }else{
            Swal.fire({
                title: 'Atencion!',
                text: 'Alcanzo el maximo de Stock',
                icon: 'warning',
                timer: 1000
              });
        }
    }

    const resta = () => {
        if(num>initial){
            setNum(num - 1);
        }
        
    }

    const reiniciar = () => {
        setNum(initial);
    }


  return (
    <div className="itemcount">
        <h3>{num}</h3>
        <p>{ stock > 1 ? `${stock} unidades disponibles` : `${stock} unidad disponible`}</p>
        <button onClick={sumar}>Suma!</button>
        <button onClick={resta}>Resta!</button>
        <button onClick={reiniciar}>Reiniciar</button>
        <button onClick={onAdd}>{ num > 0 ? `Agregar ${num} al Carrito` : `Elegi tu cantidad`}</button>
    </div>
  );
}
export default ItemCount;