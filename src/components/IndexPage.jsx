import React, { useEffect, useState } from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import membresiaData from '../data/membresias.json';

const IndexPage = () => {
  const [membresias, setMembresias] = useState([]);

  useEffect(() => {
    setMembresias(membresiaData);
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

      {/* Footer usando Bootstrap */}
      <footer className="bg-dark text-white mt-5 pt-4 pb-3">
        <div className="container">
          <div className="row align-items-center">

            {/* Lista de nombres a la izquierda */}
            <div className="col-md-4 mb-3 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>Flores Acosta Angel Fabricio</li>
                <li>Moreno Alva Neil Orlando</li>
                <li>Rodríguez Carbajal Pool Jonatan</li>
                <li>Osmar Daniel Puicon Aquino</li>
              </ul>
            </div>

            {/* Redes sociales en el centro */}
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <p className="mb-2">Síguenos en nuestras redes sociales</p>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                style={{ color: '#1877F2', fontSize: '2rem' }}
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                style={{ color: '#E4405F', fontSize: '2rem' }}
              >
                <FaInstagram />
              </a>
              {/* Copyright debajo de los iconos */}
              <p className="mt-3 mb-0">© {new Date().getFullYear()} AldaGYM. Todos los derechos reservados.</p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
