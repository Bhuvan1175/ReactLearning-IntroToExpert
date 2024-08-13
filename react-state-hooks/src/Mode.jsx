import { useState } from 'react';

export default function Mode() {
  const [bgColor, setMode] = useState('white');

  const changeMode = () => {
    console.log('Mode Change');
    setMode(bgColor === 'white' ? 'black' : 'white');
  };

  const style = {
    backgroundColor: bgColor,
    color: bgColor === 'white' ? 'gold' : 'Orange', 
    fontSize: '50px',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={style}>
      <p onClick={changeMode} style={{ cursor: 'pointer' }}>
        {bgColor === 'white' ? (
            <i className="fa-solid fa-moon"></i>
        ) : (
            <i className="fa-solid fa-sun"></i>
        )}
      </p>
    </div>
  );
}
