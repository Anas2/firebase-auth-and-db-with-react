import React from 'react';
import "./components.css";
import { useLocation } from 'react-router-dom';

function Home(props) {
    const data = useLocation().state

    return (
     <>
     <div className='home'>
        <h2>Welcome To The Home Screen !!</h2>
       
        <div><b style={{color:'black'}}>Full Name</b> : {data.userName}</div>
        <div><b style={{color:'black'}}>Email</b> : {data.email}</div>
        <div><b style={{color:'black'}}>Password</b> : {data.password}</div>
     </div>
     </>
    );
}

export default Home;