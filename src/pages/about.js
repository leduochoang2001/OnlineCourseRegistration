import React, { } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useState } from 'react';

export default function () {

    return (
        <div>
            <div className="about-section">
                <div className='btn-home-cover'>
                    <a href="/">
                        <button className='btn-home'><span>Home</span></button>
                    </a>
                </div>
                <h1>About Us Page</h1>
                <p>We are providing the best online courses about progamming.</p>
                <p>Let's check it out then choose the courses you want to register,we hope it helpful for you guys!</p>
            </div>
            <div>
            </div>
        </div>
    )
}