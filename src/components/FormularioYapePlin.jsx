import React from 'react';
import { FaQrcode } from 'react-icons/fa';
import yapeLogo from '../assets/yape.jpg';   // Asegúrate que exista
import plinLogo from '../assets/plin.jpg';   // Asegúrate que exista

const FormularioYapePlin = () => {
  return (
    <div className="d-flex justify-content-around align-items-center mt-4">
      <div className="text-center">
        <img
          src={yapeLogo}
          alt="Yape"
          style={{
            width: '150px',
            marginBottom: '8px',
            borderRadius: '12px',
            boxShadow: '0 0 8px rgba(0,0,0,0.2)'
          }}
        />
        <div style={{ fontSize: '1rem', fontWeight: '500' }}>Yape</div>
        <div style={{ fontSize: '1rem' }}>
          <FaQrcode style={{ marginRight: '6px' }} />
          <span>+51 960-628-830</span>
        </div>
      </div>
      <div className="text-center">
        <img
          src={plinLogo}
          alt="Plin"
          style={{
            width: '150px',
            marginBottom: '8px',
            borderRadius: '12px',
            boxShadow: '0 0 8px rgba(0,0,0,0.2)'
          }}
        />
        <div style={{ fontSize: '1rem', fontWeight: '500' }}>Plin</div>
        <div style={{ fontSize: '1rem' }}>
          <FaQrcode style={{ marginRight: '6px' }} />
          <span>+51 960-628-830</span>
        </div>
      </div>
    </div>
  );
};

export default FormularioYapePlin;
