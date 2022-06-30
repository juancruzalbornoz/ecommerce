import React, { useState, useEffect } from "react";
import "./ItemCount.css";
import Swal from "sweetalert2";

function ItemCount({ stock, initial, onAdd }) {
  const [num, setNum] = useState(initial);

  useEffect(() => {
    if (num === stock - 2) {
      Swal.fire({
        title: "Atencion!",
        text: "Quedan pocas unidades",
        icon: "warning",
        timer: 2000,
      });
    }
  }, [num, stock]);

  const sumar = () => {
    if (num < stock) {
      setNum(num + 1);
    } else {
      Swal.fire({
        title: "Atencion!",
        text: "Alcanzo el maximo de Stock",
        icon: "warning",
        timer: 1000,
      });
    }
  };

  const resta = () => {
    if (num > initial) {
      setNum(num - 1);
    }
  };

  const reiniciar = () => {
    setNum(initial);
  };

  return (
    <div className="itemcount">
      {/* <h3>{num}</h3> */}
      <p>
        {stock > 1
          ? `${stock} unidades disponibles`
          : `${stock} unidad disponible`}
      </p>
      <button onClick={sumar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button onClick={resta}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
</svg>
      </button>
      <button onClick={reiniciar}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
      </button>
      <button onClick={onAdd}>
        
      </button>
      <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">{num > 0 ? `Agregar ${num} al Carrito` : `Elegi tu cantidad`}</button>
    </div>
  );
}
export default ItemCount;
