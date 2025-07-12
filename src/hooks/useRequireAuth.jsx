import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function useRequireAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    if (!usuarioId) {
        // Guarda la ruta actual para volver después de login
      localStorage.setItem('destino', location.pathname);
      alert('Debes iniciar sesión');
      navigate('/login');
    }
  }, [navigate, location]);
}
