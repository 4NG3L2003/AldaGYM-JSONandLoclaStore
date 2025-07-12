import React, { useEffect, useState } from 'react';
import membresiaData from '../data/membresias.json'; // ✅ Importa el JSON

const IndexPage = () => {
  const [membresias, setMembresias] = useState([]);

  useEffect(() => {
    setMembresias(membresiaData); // ✅ Asigna los datos directamente
  }, []);

  return (
    <div>
      {/* Carrusel */}
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/1.6.jpg" className="d-block w-100" alt="banner" />
          </div>
        </div>
      </div>

      {/* Cards de membresía */}
      <div className="container mt-5 d-none d-md-block">
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
                    <a href="#" className="btn btn-primary">Ver detalles</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
