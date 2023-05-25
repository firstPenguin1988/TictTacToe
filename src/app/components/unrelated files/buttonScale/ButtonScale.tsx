import React, { useState } from 'react';
import './Button.css'; // Import CSS file for styling

const Button = () => {
  const [isScaled, setIsScaled] = useState(false);

  const handleClick = () => {
    setIsScaled(true);

    // Wait for the scale animation to complete
    setTimeout(() => {
      setIsScaled(false);
    }, 300); // Adjust the duration of the animation as needed (in milliseconds)
  };

  return (
    <button
      className={`button ${isScaled ? 'scaled' : ''}`}
      onClick={handleClick}
    >
      Click Me
    </button>
  );
};

export default Button;
