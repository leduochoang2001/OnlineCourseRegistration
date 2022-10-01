import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import IMG from '../statics/img/logo.png'
import Header from '../layouts/header'

function Home() {

    return (
        <div className="home-page">
            <Header></Header>
            <div className="logo">
                <img src={IMG} alt="" />
            </div>
            <div className="welcome-text">
                <h1>Welcome Our Page!</h1>
                <a href="/courses">
                    Go to Course!
                </a>
            </div>
        </div>
    )
}

export default Home