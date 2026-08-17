import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MesasPage from "./pages/MesasPage";
import ComandasPage from "./pages/ComandasPage"; // 👈 Importamos ComandasPage

function App() { 
  return (
    <>
      <NavBar nombreRestaurante="Sabor Criollo" />
      <Home />
      <MesasPage />
      <ComandasPage /> {/* 👈 Lo agregamos aquí junto a los demás */}
    </>
  );
}

export default App;