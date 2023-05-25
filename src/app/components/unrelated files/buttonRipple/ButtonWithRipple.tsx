import React from 'react';
import useRippleEffect from './useRippleEffect';
import './ButtonWithRipple.css';

const ButtonWithRipple = () => {
  const { ripples, createRipple } = useRippleEffect();

  return (
    <button onClick={createRipple} className="ripple-button">
      Click me
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className="ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </button>
  );
};

export default ButtonWithRipple;
