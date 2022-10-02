import React, { } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

        </div>
    )
}