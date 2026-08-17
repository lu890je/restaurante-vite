import { useState, useEffect } from "react";

function OrderForm({ mesaNumero }) {
  const [plato, setPlato] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "plato") setPlato(value);
    if (name === "cantidad") setCantidad(value);
  };

  useEffect(() => {
    console.log("OrderForm montado — mesa:", mesaNumero);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEnviando(true);
    setMensaje("");

    setTimeout(() => {
      setEnviando(false);
      setMensaje(`Comanda enviada: ${plato} x${cantidad}`);
      setPlato("");
      setCantidad(1);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Mesa {mesaNumero}</h3>

      <div>
        <label>Plato:</label>
        <input
          type="text"
          name="plato"
          value={plato}
          onChange={handleChange}
          placeholder="Nombre del plato"
        />
      </div>

      <div>
        <label>Cantidad:</label>
        <input
          type="number"
          name="cantidad"
          min="1"
          value={cantidad}
          onChange={handleChange}
        />
      </div>

      <button type="submit" disabled={enviando}>
        {enviando ? "Enviando..." : "Enviar comanda"}
      </button>

      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}

export default OrderForm;