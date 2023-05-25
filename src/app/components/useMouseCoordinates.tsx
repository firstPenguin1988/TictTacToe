
import { useEffect, useState } from 'react';

// interface MyObject {
//   x: number;
//   y: number;
// }


const useMouseClickPosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const button = event.currentTarget as HTMLButtonElement;
      const rect = button.getBoundingClientRect();
      console.log('rect: ' + rect);
      
      const x =  clientX - rect.left;
      const y =  clientY - rect.top;
      setMousePosition({x, y});
    };

    const button = document.querySelector('button'); // Replace 'button' with the appropriate selector
    button?.addEventListener('click', handleClick);

    return () => {
      button?.removeEventListener('click', handleClick);
    };
  }, []);

  return mousePosition;
};

export default useMouseClickPosition;

/*
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
*/

/* ======getBounding
import React, { useState } from 'react';
import useRippleEffect from './useRippleEffect';
import './ButtonWithRipple.css';

const ButtonWithRipple: React.FC = () => {
  const [ripple, setRipple] = useState(false);
  const { startRipple } = useRippleEffect();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const rippleX = event.clientX - buttonRect.left;
    const rippleY = event.clientY - buttonRect.top;

    startRipple(rippleX, rippleY);
    setRipple(true);

    setTimeout(() => {
      setRipple(false);
    }, 1000); // Duration of the ripple effect (adjust as needed)
  };

  return (
    <button className="button-with-ripple" onClick={handleClick}>
      Button
      {ripple && <span className="ripple-effect" />}
    </button>
  );
};

export default ButtonWithRipple;

===========================================================

import { useState } from 'react';

const useRippleEffect = () => {
  const [rippleStyle, setRippleStyle] = useState<React.CSSProperties>({});
  const [rippleActive, setRippleActive] = useState(false);

  const startRipple = (x: number, y: number) => {
    setRippleStyle({
      top: y + 'px',
      left: x + 'px',
    });

    setRippleActive(true);

    setTimeout(() => {
      setRippleStyle({});
      setRippleActive(false);
    }, 1000); // Duration of the ripple effect (adjust as needed)
  };

  return { startRipple, rippleStyle, rippleActive };
};

export default useRippleEffect;


*/


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