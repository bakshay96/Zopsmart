import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState('green');

  useEffect(() => {
    const intervals = [
      { color: 'green', duration: 3000 },  // Green for 3 seconds
      { color: 'yellow', duration: 2000 }, // Yellow for 2 seconds
      { color: 'red', duration: 5000 },    // Red for 5 seconds
      { color: 'yellow', duration: 2000 }, // Yellow again for 2 seconds
    ];

    let currentIndex = 0;

    const cycleTrafficLight = () => {
      setColor(intervals[currentIndex].color);
      currentIndex = (currentIndex + 1) % intervals.length;
    };

    const intervalId = setInterval(cycleTrafficLight, intervals[currentIndex].duration);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Traffic Signal</h1> {/* Add heading */}
      <div
        style={{
          width: '100px',
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          border: '2px solid black',
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: color === 'green' ? 'green' : 'gray',
            transition: 'background-color 0.5s ease',
          }}
        />
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: color === 'yellow' ? 'yellow' : 'gray',
            transition: 'background-color 0.5s ease',
          }}
        />
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: color === 'red' ? 'red' : 'gray',
            transition: 'background-color 0.5s ease',
          }}
        />
      </div>
    </div>
  );
};

export default TrafficLight;
