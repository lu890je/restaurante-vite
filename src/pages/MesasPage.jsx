import MesaCard from "../components/MesaCard";
import { mesasMock } from "../data/mesasMock";

function MesasPage() {
  return (
    <div>
      <h2>Mesas del Restaurante</h2>

      {mesasMock.map((mesa) => (
        <MesaCard
          key={mesa.id}
          numero={mesa.numero}
          capacidad={mesa.capacidad}
          estado={mesa.estado}
          comensales={mesa.comensales}
        />
      ))}
    </div>
  );
}

export default MesasPage;