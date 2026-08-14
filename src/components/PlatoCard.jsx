function PlatoCard({ plato }) {
    return (
      <article className={`plato-card ${!plato.disponible ? "agotado" : ""}`}>
  
        <h2>{plato.nombre}</h2>
  
        <div className="precio">
          S/ {plato.precio.toFixed(2)}
        </div>
  
        <div className="stock">
          STOCK: {plato.stock}
        </div>
  
        <div className="plato-footer">
          <span
            className={
              plato.disponible
                ? "estado disponible"
                : "estado no-disponible"
            }
          >
            {plato.disponible ? "DISPONIBLE" : "AGOTADO"}
          </span>
        </div>
  
        <div className="categoria">
          {plato.categoria}
        </div>
  
      </article>
    );
  }
  
  export default PlatoCard;