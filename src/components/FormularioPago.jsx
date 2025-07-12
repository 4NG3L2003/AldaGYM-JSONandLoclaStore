import React, { useEffect, useState } from 'react';
import membresiasData from '../data/membresias.json';
import FormularioTarjeta from './FormularioTarjeta';
import FormularioYapePlin from './FormularioYapePlin';

const FormularioPago = () => {
  const [membresias, setMembresias] = useState([]);
  const [tipoMembresia, setTipoMembresia] = useState('');
  const [monto, setMonto] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const [metodoPago, setMetodoPago] = useState('Efectivo');

  // Estados para tarjeta
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');
  const [cvv, setCvv] = useState('');

  useEffect(() => {
    setMembresias(membresiasData);
    if (membresiasData.length > 0) {
      const defaultMembresia = membresiasData[0];
      setTipoMembresia(defaultMembresia.tipo);
      setMonto(defaultMembresia.precio);
      setDescripcion(defaultMembresia.descripcion);
    }
  }, []);

  const handleTipoChange = (e) => {
    const tipoSeleccionado = e.target.value;
    setTipoMembresia(tipoSeleccionado);
    const membresia = membresias.find(m => m.tipo === tipoSeleccionado);
    if (membresia) {
      setMonto(membresia.precio);
      setDescripcion(membresia.descripcion);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioId = localStorage.getItem('usuarioId');
    if (!usuarioId) {
      alert('Debes iniciar sesión para hacer un pago');
      return;
    }

    if (metodoPago === 'Tarjeta' && (!numeroTarjeta || !fechaExpiracion || !cvv)) {
      alert('Por favor completa los datos de tu tarjeta.');
      return;
    }

    const nuevoPago = {
      usuarioId,
      tipoMembresia,
      monto,
      metodoPago,
      fecha: new Date().toISOString(),
      datosTarjeta: metodoPago === 'Tarjeta' ? { numeroTarjeta, fechaExpiracion, cvv } : null
    };

    const pagosGuardados = JSON.parse(localStorage.getItem('pagos')) || [];
    pagosGuardados.push(nuevoPago);
    localStorage.setItem('pagos', JSON.stringify(pagosGuardados));

    alert('¡Pago registrado exitosamente!');
    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded shadow"
      style={{ backgroundColor: '#E0F7FA' }}
    >
      <div className="mb-3">
        <label className="form-label">Tipo de Membresía</label>
        <select
          className="form-select"
          value={tipoMembresia}
          onChange={handleTipoChange}
        >
          {membresias.map(m => (
            <option key={m.id} value={m.tipo}>{m.tipo}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <input type="text" className="form-control" value={descripcion} readOnly />
      </div>

      <div className="mb-3">
        <label className="form-label">Monto (S/)</label>
        <input type="number" className="form-control" value={monto} readOnly />
      </div>

      <div className="mb-3">
        <label className="form-label">Método de Pago</label>
        <select
          className="form-select"
          value={metodoPago}
          onChange={(e) => setMetodoPago(e.target.value)}
        >
          <option value="Efectivo">Efectivo</option>
          <option value="Tarjeta">Tarjeta</option>
          <option value="Yape / Plin">Yape / Plin</option>
        </select>
      </div>

      {/* Mostrar campos adicionales según método de pago */}
      {metodoPago === 'Tarjeta' && (
        <FormularioTarjeta
          numeroTarjeta={numeroTarjeta}
          setNumeroTarjeta={setNumeroTarjeta}
          fechaExpiracion={fechaExpiracion}
          setFechaExpiracion={setFechaExpiracion}
          cvv={cvv}
          setCvv={setCvv}
        />
      )}

      {metodoPago === 'Yape / Plin' && (
        <FormularioYapePlin />
      )}

      <button
        type="submit"
        className="btn w-100"
        style={{ backgroundColor: '#87CEEB', color: '#fff' }}
      >
        Pagar
      </button>
    </form>
  );
};

export default FormularioPago;
