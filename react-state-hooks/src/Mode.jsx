import { useState } from 'react';
export default function Mode() {
  const [bgColor, setMode] = useState('white');


  return (
    <div className='page' style={{ backgroundColor: bgColor, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p onClick={()=>setMode(bgColor === 'white' ? 'black' : 'white')} style={{ cursor: 'pointer' ,color: bgColor === 'white' ? 'gold' : 'Orange' , fontSize:"20px"}}>
        {bgColor === 'white' ? (
            <i className="fa-solid fa-moon"></i>
        ) : (
            <i className="fa-solid fa-sun"></i>
        )}
      </p>
    </div>
  );
}
