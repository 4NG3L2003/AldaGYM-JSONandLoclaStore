// src/pages/MembresiaPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import CerrarSesion from "../components/CerrarSesion";
import membresiaData from "../data/membresias.json"; 

const MembresiaPage = () => {
  const [membresias, setMembresias] = useState([]);
  const navigate = useNavigate();
  const usuarioId = localStorage.getItem("usuarioId");

  useEffect(() => {
    setMembresias(membresiaData);
  }, []);

  const handlePagar = () => {
    if (usuarioId) {
      navigate('/pagos');   // ✅ navega al historial + formulario
    } else {
      localStorage.setItem("destino", '/pagos');
      navigate("/login");
    }
  };

  return (
    <div className="container mt-4">
      {usuarioId && <CerrarSesion />}
      <h1 className="text-center mb-4">Membresías Disponibles</h1>
      <div className="row">
        {membresias.map((m) => (
          <div className="col-md-6 col-lg-3" key={m.id}>
            <div className="card mt-4">
              <img src="/img/card1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{m.tipo}</h5>
                <p className="card-text">{m.descripcion}</p>
                <p className="card-text"><strong>Precio: S/. {m.precio}</strong></p>
                <div className="text-center">
                  <button className="btn btn-success" onClick={handlePagar}>
                    Pagar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembresiaPage;
