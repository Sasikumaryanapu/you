import React, { useState, useEffect } from 'react';

const CenteredContent = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [lovelyData, setLovelyData] = useState([]);
  const [randomColor, setRandomColor] = useState(getRandomColor());

  useEffect(() => {
    const generateLovelyData = () => {
      const lovelyArray = [
        "Nuv na chinni papa 🫂♾️❤️",
        "Nuv antey nak chala istam 🩷😍",
        "Nuv na bujji baby 🙈🩷",
        "Ninu chala baga chuskunta 💝",
        "Nuv nenu 🫂♾️❤️💯🌕",
        "i love you infinite ♾️",
        "Kukka pilla ❤️",
        "i miss you 🫂",
        "Baby ily kadha 🫂❤️",
        "Happy Birthday to you Maa❤️ i love you infinite♾️🫂💯",
      ];

      setLovelyData(lovelyArray);
    };

    const currentDateObj = new Date();
    const numericDay = 16 - currentDateObj.getDate();

    setCurrentDate(numericDay);
    generateLovelyData();

    const intervalId = setInterval(() => {
        setRandomColor(getRandomColor());
      }, 5000); // Change color every 5 seconds
  
      return () => clearInterval(intervalId);
  }, []); 

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const lovelyMessage = currentDate === 16 ? lovelyData[lovelyData.length - 1] : lovelyData[currentDate % lovelyData.length];

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh',fontFamily: 'Pacifico, cursive', background: `linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.5)), repeating-linear-gradient(45deg,${randomColor}, #f3f3f3 10px, #ffffff 10px, ${randomColor} 20px)`,
}}>
      <div style={{ textAlign: 'center', color: '#333' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px #aaa' }}>🎉🎊🎈</h1>
        <br />
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 4px #aaa' }}>{currentDate}</h1>
        <br />
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px #aaa' }}>more days</h1>
        <br />
        <p style={{ fontSize: '2rem', textShadow: '2px 2px 4px #aaa' }}>{lovelyMessage}</p>
      </div>
    </div>
  );
};

export default CenteredContent;
