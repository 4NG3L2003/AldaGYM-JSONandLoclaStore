import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ para redirigir
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const NuevoUsuarioForm = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // ✅ inicializar hook

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Leer usuarios existentes desde localStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Crear nuevo usuario con id único
    const nuevoUsuario = {
      ...usuario,
      id: Date.now().toString()
    };

    usuariosGuardados.push(nuevoUsuario);

    // Guardar en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

    // Limpiar formulario
    setUsuario({ nombre: '', email: '', password: '' });

    alert('¡Usuario creado exitosamente!');
    navigate('/login'); // ✅ redirige al login
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4" style={{ color: '#87CEEB' }}>
                <FaUser /> Nuevo Usuario
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    <FaUser /> Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={usuario.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa tu nombre"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <FaEnvelope /> Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={usuario.email}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa tu correo"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    <FaLock /> Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={usuario.password}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa tu contraseña"
                  />
                </div>
                <button
                  type="submit"
                  className="btn w-100"
                  style={{ backgroundColor: '#87CEEB', color: '#fff' }}
                >
                  <FaUser /> Crear Usuario
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoUsuarioForm;
