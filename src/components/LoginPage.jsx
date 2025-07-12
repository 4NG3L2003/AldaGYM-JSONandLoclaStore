import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import usuariosJSON from '../data/usuarios.json';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuariosLocal = JSON.parse(localStorage.getItem('usuarios')) || [];
    const todosLosUsuarios = [...usuariosJSON, ...usuariosLocal];

    const usuarioEncontrado = todosLosUsuarios.find(
      (user) => user.email === email && user.password === password
    );

    if (usuarioEncontrado) {
      localStorage.setItem('usuarioId', usuarioEncontrado.id);
      localStorage.setItem('nombreUsuario', usuarioEncontrado.nombre);

      setMensaje('Inicio de sesión exitoso');
      const destino = localStorage.getItem("destino") || "/menu";
      localStorage.removeItem("destino");
      navigate(destino);
    } else {
      setMensaje('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="text-center mb-4">Iniciar Sesión</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Ingresar</button>

                <div className="text-center mt-3">
                  <Link to="/nuevo-usuario" className="text-decoration-none text-dark">
                    ¿No tienes cuenta? Regístrate
                  </Link>

                </div>

                {mensaje && <div className="alert alert-info mt-3">{mensaje}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
