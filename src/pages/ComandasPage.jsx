import { useState } from 'react';
import OrderFormClase from '../components/OrderForm.clase';
import OrderForm from '../components/OrderForm';

// 1. Mock de las mesas disponibles
const MESAS_MOCK = [1, 2, 3, 4, 5];

function ComandasPage() {
  // 2. Estado para almacenar la mesa seleccionada (inicia en la mesa 1 por defecto)
  const [mesaNumero, setMesaNumero] = useState(1);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Gestión de Comandas - Día 4</h2>

      {/* 3. Selector de mesa con <select> */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="select-mesa">Seleccionar Mesa: </label>
        <select 
          id="select-mesa"
          value={mesaNumero} 
          onChange={(e) => setMesaNumero(Number(e.target.value))}
        >
          {MESAS_MOCK.map((mesa) => (
            <option key={mesa} value={mesa}>
              Mesa {mesa}
            </option>
          ))}
        </select>
      </div>

      <OrderFormClase />
      
      {/* 4. Renderizar OrderForm pasándole la prop mesaNumero */}
      <OrderForm mesaNumero={mesaNumero} />
    </div>
  );
}

export default ComandasPage;