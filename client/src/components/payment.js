import axios from 'axios';
import React, { } from 'react';
import { useState } from 'react';
import { totalCost } from './cart';


function Payment() {
    const [CheckedOut, setCheckedOut] = useState(false)

    const handleClick = () => {
        var getEmail = document.getElementById('email').value

        if (getEmail.includes('@')) {
            const regisInfo = {
                email: getEmail,
                coursesRegistered: localStorage.getItem('coursesInCart'),
                totalCost: localStorage.getItem('totalCost')
            }

            axios.post('http://localhost:8080/registerinfo', regisInfo)
                .then(() => console.log('Sent to database!'))
                .catch(error => (error) => console.log(error))
            setCheckedOut(true)

            alert('An E-mail just have been sent to your E-mail Address')
            localStorage.setItem('totalCost', 0)
        }
    }

    return (
        <div>
            <div className='body-payment'>
                <div className='btn-back-crs'>
                    <div className='btn-home-cover'>
                        <a href="/courses">
                            <button className='btn-home'><span>{'<'}</span></button>
                        </a>
                    </div>
                </div>
                <form action="">
                    <div className="container-payment">
                        <div className="card-payment px-4">
                            <p className="h8 py-3">Payment Details</p>
                            <div className="row gx-3">
                                <div className="col-12">
                                    <div className="d-flex flex-column">
                                        <p className="text-payment mb-1">Email Address</p>
                                        <input class="form-control mb-3" id='email' type="email" placeholder="name@host.com" required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex flex-column">
                                        <p className="text-payment mb-1">Person Name</p>
                                        <input className="form-control mb-3" type="text" placeholder="Name" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="d-flex flex-column">
                                        <p className="text-payment mb-1">Card Number</p>
                                        <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" required />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex flex-column">
                                        <p className="text-payment mb-1">Expiry</p>
                                        <input className="form-control mb-3" type="date" required />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex flex-column">
                                        <p className="text-payment mb-1">CVV/CVC</p>
                                        <input className="form-control mb-3 pt-2 " type="password" placeholder="***" required />
                                    </div>
                                </div>
                                <br /><br /><br /><br /><br />
                                <div className="col-12" style={{ position: 'relative', marginLeft: '120px' }}>
                                    <button type='submit' className="btn-payment btn-primary mb-3 btn-act" onClick={() => handleClick()}>
                                        <span className="ps-3">Pay {`$ ${localStorage.getItem('totalCost')}`}</span>
                                        <span className="fas fa-arrow-right"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Payment