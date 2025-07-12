import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-md bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand fw-bold" to="/">
        <img src="/img/logo.png" alt="logo" className="logo" /> AldaGYM
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
          <li className="nav-item"><Link className="nav-link active" to="/login">Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/membresias">Membresías</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
