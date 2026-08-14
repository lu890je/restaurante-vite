import PlatoCard from "../components/PlatoCard";
import { platosMock } from "../data/platos.mock";

function Home() {
  return (
    <main>
      <h1>CARTA DEL RESTAURANTE</h1>

      <section>
        {platosMock.map((plato) => (
          <PlatoCard key={plato.id} plato={plato} />
        ))}
      </section>
    </main>
  );
}

export default Home;