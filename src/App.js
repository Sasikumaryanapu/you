import './App.css';
import Wishes from './Wishes';
import Birthday from './Birthday';
import { useEffect, useState } from 'react';

function App() {

  const [flag,setFlag]=useState(true)

  useEffect(()=>{

    setTimeout(()=>{
      setFlag(false)
    },3000)

  },[])
  return (  
    <div className="App">
     {new Date().getDate() == 16 ?(
      <>
    { flag ?  
    <div  style={{
      backgroundColor: '#001F3F',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }} >

    <h1 style={{ fontSize: '3rem', color: 'white', textShadow: '2px 2px 4px #aaa',fontFamily: 'Pacifico, cursive' }}>
     Happy Birthday to you Maa❤️ <br/>i love you infinite <br/>♾️🫂💯

        </h1> 
    </div> :
        <Birthday/>}  
        
      </>
        ): <Wishes/>
      }
    </div>
  );
}

export default App;
