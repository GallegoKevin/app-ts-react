import React, { useState, useRef } from "react";
import { NotebookProps, storeProps } from "../../Objects/NotebookArray";
import "./Card.css"; // Importamos el archivo de estilos CSS

interface CardProps {
  notebook: NotebookProps;
}

const Card: React.FC<CardProps> = ({ notebook }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleHover = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Error al reproducir el video:', error);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="card m-2 border-none shadow" style={{ width: '24rem' }}>
      <div 
        className="embed-responsive embed-responsive-16by9 card-container" 
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <img 
          src={notebook.imagen} 
          alt="A placeholder image" 
          className="card-img-top card-image"
        />
        <video 
          ref={videoRef}
          src={notebook.video} 
          autoPlay 
          muted 
          loop 
          className="embed-responsive-item card-video"
          style={{ opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s ease' }}
        >
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
      <div className="card-body">
        <h5 className="card-title text-center">{notebook.titulo}</h5>
        <p className="card-text">{notebook.descripcion}</p>
      </div>
      <ul className="list-group list-group-flush">
        {notebook.store.map((item: storeProps, index: number) => (
          <ul key={index} className="list-group list-group-flush">
            <li className="list-group-item"><strong>Stock: </strong>{item.stock}</li>
            <li className="list-group-item"> <strong>Precio:</strong>{item.precio}</li>
          </ul>
        ))}
      </ul>
      <div className="card-body">
        <p className="card-link text-center text-secondary">{notebook.anio}</p>
      </div>
    </div>
  );
};

export default Card;
