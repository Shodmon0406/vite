import React, { useState, useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Импорт иконки из MUI

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="h-screen w-screen relative bg-gray-900 overflow-hidden">
      <LocationOnIcon
        style={{
          position: 'fixed',
          left: `${position.x - 24}px`, 
          top: `${position.y - 24}px`,  
          width: '48px', 
          height: '48px',
          color: 'red', 
          pointerEvents: 'none',
          transition: 'transform 0.1s ease-out', 
        }}
      />
    </div>
  );
};

export default CursorFollower;
