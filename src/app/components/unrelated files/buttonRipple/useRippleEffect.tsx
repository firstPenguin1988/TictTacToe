import { useEffect, useState } from 'react';

const useRippleEffect = () => {
  const [ripples, setRipples] = useState<{ x: number; y: number }[]>([]);

  const createRipple = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setRipples((prevRipples) => [...prevRipples, { x, y }]);
  };

  useEffect(() => {
    const removeRipple = () => {
      setRipples([]);
    };

    document.addEventListener('mouseup', removeRipple);
    return () => {
      document.removeEventListener('mouseup', removeRipple);
    };
  }, []);

  return { ripples, createRipple };
};

export default useRippleEffect;
