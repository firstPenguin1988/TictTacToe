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
