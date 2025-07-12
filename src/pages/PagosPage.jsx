import React, { useEffect, useState } from 'react';
import FormularioPago from '../components/FormularioPago';
import CerrarSesion from '../components/CerrarSesion'; // <-- importa el componente
import usuariosJson from '../data/usuarios.json';

const PagosPage = () => {
  const [pagos, setPagos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');

    // Cargar pagos del localStorage solo de este usuario
    const pagosGuardados = JSON.parse(localStorage.getItem('pagos')) || [];
    const pagosDelUsuario = pagosGuardados.filter(
      pago => String(pago.usuarioId) === String(usuarioId)
    );
    setPagos(pagosDelUsuario);

    // Mezclar usuarios del JSON + localStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    setUsuarios([...usuariosJson, ...usuariosGuardados]);
  }, []);

  const getNombreUsuario = (usuarioId) => {
    const usuario = usuarios.find(
      u => String(u.id) === String(usuarioId)
    );
    return usuario ? (usuario.nombre || usuario.usuario) : 'Desconocido';
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-center" style={{ color: '#87CEEB' }}>
          Registrar un nuevo pago
        </h2>
        <CerrarSesion /> {/* <-- Botón para cerrar sesión */}
      </div>

      <FormularioPago />

      <hr className="my-4" />

      <h4 className="mt-4 mb-3 text-center" style={{ color: '#87CEEB' }}>
        Historial de mis pagos
      </h4>
      {pagos.length === 0 ? (
        <p className="text-center">No tienes pagos registrados.</p>
      ) : (
        <table className="table table-bordered mt-4">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Nombre del Usuario</th>
              <th>Membresía</th>
              <th>Monto</th>
              <th>Método</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {pagos.map((pago, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{getNombreUsuario(pago.usuarioId)}</td>
                <td>{pago.tipoMembresia}</td>
                <td>S/. {pago.monto}</td>
                <td>{pago.metodoPago}</td>
                <td>{new Date(pago.fecha).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PagosPage;
