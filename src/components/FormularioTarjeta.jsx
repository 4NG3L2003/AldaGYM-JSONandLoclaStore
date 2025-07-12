// src/components/FormularioTarjeta.jsx
import React from 'react';

const FormularioTarjeta = ({
  numeroTarjeta,
  setNumeroTarjeta,
  fechaExpiracion,
  setFechaExpiracion,
  cvv,
  setCvv
}) => {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">Número de Tarjeta</label>
        <input
          type="text"
          className="form-control"
          value={numeroTarjeta}
          onChange={(e) => setNumeroTarjeta(e.target.value)}
          placeholder="1234 5678 9012 3456"
          maxLength={19}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Fecha de Expiración</label>
        <input
          type="month"
          className="form-control"
          value={fechaExpiracion}
          onChange={(e) => setFechaExpiracion(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">CVV</label>
        <input
          type="password"
          className="form-control"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          maxLength={4}
        />
      </div>
    </>
  );
};

export default FormularioTarjeta;
