import React, { Component } from 'react';

class OrderFormClase extends Component {
  constructor(props) {
    super(props);
    this.state = { cliente: '', mesa: '', plato: '' };
  }

  // 🔹 Se ejecuta UNA SOLA VEZ al montar el componente
  componentDidMount() {
    console.log('🟢 [CLASE] Componente montado en el DOM');
  }

  // 🔹 Se ejecuta cuando el componente se destruye/desmonta
  componentWillUnmount() {
    console.log('🔴 [CLASE] Componente desmontado');
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Comanda (Clase):', this.state);
  };
   
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }}>
        <h3>Formulario (Versión Clase)</h3>
        <input type="text" name="cliente" placeholder="Cliente" value={this.state.cliente} onChange={this.handleChange} />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default OrderFormClase;