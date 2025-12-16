'use client';

import React, { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateSize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    updateSize();

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return windowSize;
};

const WindowSizeIndicator: React.FC = () => {
  const { width, height } = useWindowSize();

  if (width === 0) return null;

  return (
    <div className="fixed bottom-2 left-1/2 z-9999 -translate-x-1/2 rounded-md bg-black p-2 font-mono text-sm text-white shadow-lg select-none">
      W: {width} px | H: {height} px
    </div>
  );
};

export default WindowSizeIndicator;
