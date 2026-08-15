import PropTypes from "prop-types";

function MesaCard({ numero, capacidad, estado, comensales }) {
  const color =
    estado === "libre"
      ? "#d4edda"
      : estado === "ocupada"
      ? "#f8d7da"
      : "#fff3cd";

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        margin: "10px",
        backgroundColor: color,
      }}
    >
      <h3>Mesa {numero}</h3>
      <p>Capacidad: {capacidad}</p>
      <p>Comensales: {comensales}</p>
      <strong>Estado: {estado}</strong>
    </div>
  );
}

MesaCard.propTypes = {
  numero: PropTypes.number.isRequired,
  capacidad: PropTypes.number.isRequired,
  estado: PropTypes.oneOf(["libre", "ocupada", "reservada"]).isRequired,
  comensales: PropTypes.number.isRequired,
};

export default MesaCard;