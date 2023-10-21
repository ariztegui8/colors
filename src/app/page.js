'use client'
import { useEffect, useState } from 'react';

const Home = () => {
  const [currentColor, setCurrentColor] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor(getRandomColor());
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const squareStyle = {
    width: '100%',
    height: '100vh',
    backgroundColor: currentColor,
  };

  return (
    <div style={squareStyle} className=''>

    </div>
  )
};

export default Home;
