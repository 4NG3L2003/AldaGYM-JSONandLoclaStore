import { useNavigate } from 'react-router-dom';

const Bienvenida = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Elimina datos del localStorage
    localStorage.removeItem('usuarioId');
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('destino');

    // Redirige al login
    navigate('/login');
  };

  return (
    <div className="container mt-5 text-center">
      <h2>¡Bienvenido!</h2>
      <p>Has iniciado sesión correctamente.</p>

      <button className="btn btn-danger mt-4" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Bienvenida;
