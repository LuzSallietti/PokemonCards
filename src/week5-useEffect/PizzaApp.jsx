import { useState, useEffect } from "react";
import Pedido from "./Pedido";

const PizzaApp = () => {
    const [mostrarPedido, setMostrarPedido] = useState(false);
   
    useEffect(() => {
        console.log("Se monta PizzaApp");
        setTimeout(() => {
            setMostrarPedido(true);            
        }, 2000);       
     },[]);  

  return (
    <>
      <h1>Pedí tu pizza</h1>
      <h2>Su pedido:</h2>
      {
      <Pedido cliente={"Flor Rotger"} producto={"Pizza napolitana x 1"} />}
      <button onClick={()=> setMostrarPedido(false)}>Cancelar pedido</button>
    </>
  );
};

export default PizzaApp;