import React, { Component } from 'react';

class OrderFormClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: '',
      mensaje: ''
    };
  }

  handleChange = (e) => {
    this.setState({ cliente: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.cliente.trim()) return;

    // 1. Mostrar mensaje de confirmación y limpiar el input de cliente
    this.setState({
      mensaje: '¡Comanda enviada con éxito (Versión Clase)!',
      cliente: ''
    });

    // 2. Limpiar el mensaje de confirmación después de 3 segundos
    setTimeout(() => {
      this.setState({ mensaje: '' });
    }, 3000);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px' }}>
        <h3>Formulario (Versión Clase)</h3>

        {/* Mensaje de confirmación */}
        {this.state.mensaje && (
          <p style={{ color: 'green', fontWeight: 'bold' }}>{this.state.mensaje}</p>
        )}

        <input
          type="text"
          placeholder="Cliente"
          value={this.state.cliente}
          onChange={this.handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default OrderFormClase;