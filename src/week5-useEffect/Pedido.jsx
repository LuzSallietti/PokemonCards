import { useEffect } from "react";

const Pedido = ({ cliente, producto }) => {
  useEffect(() => {
    console.log("Se monta Pedido");
    return () => {
      console.log("Se desmonta Pedido");
    };
  }, []);

  return (
    <>
      <div>
        <p>{producto}</p>
        <p>{cliente}</p>
      </div>
    </>
  );
};
export default Pedido;
