// src/componentes/CerrarSesion.tsx
import { useNavigate } from 'react-router-dom';

const CerrarSesion = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('usuarioId');
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('destino');
    navigate('/login');
  };

  return (
    <div className="text-end mt-3">
      <button className="btn btn-outline-danger" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default CerrarSesion;
