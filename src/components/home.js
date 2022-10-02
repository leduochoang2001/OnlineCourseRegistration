import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Header from '../layouts/header'
import Footer from '../layouts/footer'

function Home() {

    return (
        <div className="home-page">
            <Header></Header>
            <div className="welcome-text">
                <h1>Welcome To Our Courses!</h1>
                <a href="/courses">
                    <button className='btn-crs'><span>Courses</span></button>
                </a>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home