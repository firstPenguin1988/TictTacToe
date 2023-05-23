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
