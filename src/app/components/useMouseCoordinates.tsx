import { useEffect, useState } from 'react';

const useMouseClickPosition = () => {
  const [mousePosition, setMousePosition] = useState({ clientX: 0, clientY: 0 });

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ clientX, clientY });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return mousePosition;
};

export default useMouseClickPosition;

/*========================================
import { useEffect, useState } from 'react';

const useMouseClickPosition = () => {
  const [mousePosition, setMousePosition] = useState({ clientX: 0, clientY: 0 });

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ clientX, clientY });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return mousePosition;
};

export default useMouseClickPosition;
=========================================*/

/*
import { useState } from 'react';

const useMouseClickPosition = () => {
  const [mousePosition, setMousePosition] = useState({ clientX: 0, clientY: 0 });

  const handleMouseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = event;
    setMousePosition({ clientX, clientY });
  };

  return { mousePosition, handleMouseClick };
};

export default useMouseClickPosition;
*/
/*

import { useEffect, useState } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ clientX: 0, clientY: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ clientX, clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
*/