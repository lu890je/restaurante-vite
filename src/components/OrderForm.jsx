import { useState, useEffect } from 'react';

function OrderForm() {
  const [form, setForm] = useState({ cliente: '', mesa: '', plato: '' });

  // 🔹 Equivalente a componentDidMount + componentWillUnmount
  useEffect(() => {
    console.log('🟢 [FUNCIONAL] Componente montado');

    // Función de limpieza (Cleanup) -> Equivalente a componentWillUnmount
    return () => {
      console.log('🔴 [FUNCIONAL] Componente desmontado');
    };
  }, []); // Array vacío = corre solo 1 vez al montar

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Comanda (Funcional):', form);
  };   

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #4CAF50', padding: '15px' }}>
      <h3>Formulario (Versión Funcional)</h3>
      <input type="text" name="cliente" placeholder="Cliente" value={form.cliente} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default OrderForm;