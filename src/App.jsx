import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IndexPage from './components/IndexPage';
import LoginPage from './components/LoginPage';
import MembresiasPage from './pages/MembresiaPage';
import PagosPage from './pages/PagosPage';
import NuevoUsuarioForm from './components/NuevoUsuarioForm'; // importa el formulario
import Bienvenida from './components/Bienvenida';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/membresias" element={<MembresiasPage />} />
      <Route path="/pagos" element={<PagosPage />} />
      <Route path="/nuevo-usuario" element={<NuevoUsuarioForm />} />  {/* ✅ ruta correcta */}
      <Route path="/menu" element={<Bienvenida />} />
    </Routes>
  </Router>
);

export default App;
