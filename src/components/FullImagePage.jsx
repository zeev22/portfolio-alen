import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../FullImagePage.css';

const FullImagePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { image, title } = state || {};

  if (!image || !title) {
    return (
      <div className="full-image-container">
        <p className="no-image-message">No image selected.</p>
      </div>
    );
  }

  return (
    <div className="full-image-container">
      <div className="full-image-content">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          Back to Projects
        </button>
        <h2 className="image-title">{title}</h2>
        <img
          src={image}
          alt={title}
          className="full-image"
        />
      </div>
    </div>
  );
};

export default FullImagePage;