import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Home from '../components/Home';

function router(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}  />
                <Route path='signup' element={<Signup />}  />
                <Route path='home' element={<Home />}  />
                {/* <Route path='details' element={<Details />}  /> */}
                {/* <Route path='dashboard/*' element={<Dashboard />}  /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default router;