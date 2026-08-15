import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MesasPage from "./pages/MesasPage";

function App() { 
  return (
    <>
      <NavBar nombreRestaurante="Sabor Criollo" />
      <Home />
      <MesasPage />
    </>
  );
}

export default App;