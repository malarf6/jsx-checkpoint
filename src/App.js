import React from 'react';
import logo from './logo.svg';
import './App.css';
import myImage1 from "./image1.jpg";
import myImage2 from "/image2.jpg";
import './style.css';

function App() {
  return (
    <div className="App">
       <div style={{border:'solid 1', 
       color:'black',
       maxWidth: '100vw'}} >
 
 <h1 className={'title red'}>Panda</h1>  

     <br/>  

     <img src={myImage2}/>  
      
        <br/>

      

          <img src={myImage1}/>  

      </div>  

<video width={320} height={240} controls>  

   <source src={"myVideo.mp4"} type={"video/mp4"}/>

</video> 
    </div>
  )};


export default App;
