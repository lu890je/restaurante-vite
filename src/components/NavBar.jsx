import PropTypes from "prop-types";

function NavBar({ nombreRestaurante = "Restaurante" }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        background: "#333",
        color: "white",
      }}
    >
      <h2>{nombreRestaurante}</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <span>Carta</span>
        <span>Mesas</span>
        <span>Comandas</span>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  nombreRestaurante: PropTypes.string,
};

export default NavBar;