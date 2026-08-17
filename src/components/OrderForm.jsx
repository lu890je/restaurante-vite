import { useState, useEffect } from 'react';

function OrderForm({ mesaNumero }) {
  const [form, setForm] = useState({ cliente: '' });
  // Estado para controlar el mensaje de confirmación
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    console.log('🟢 [FUNCIONAL] Componente montado');
    return () => {
      console.log('🔴 [FUNCIONAL] Componente desmontado');
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.cliente.trim()) return;

    // 1. Mostrar mensaje de confirmación
    setMensaje(`¡Comanda enviada con éxito para la Mesa ${mesaNumero}!`);

    // 2. Limpiar el formulario
    setForm({ cliente: '' });

    // (Opcional) Borrar el mensaje después de 3 segundos
    setTimeout(() => {
      setMensaje('');
    }, 3000);
  };   

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #4CAF50', padding: '15px' }}>
      {/* 🔹 Requisito: El título cambia según la mesa elegida */}
      <h3>Formulario de Comanda - Mesa {mesaNumero}</h3>

      {/* 🔹 Requisito: Mensaje de confirmación al hacer submit */}
      {mensaje && <p style={{ color: 'green', fontWeight: 'bold' }}>{mensaje}</p>}

      <input 
        type="text" 
        name="cliente" 
        placeholder="Cliente" 
        value={form.cliente} 
        onChange={handleChange} 
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default OrderForm;