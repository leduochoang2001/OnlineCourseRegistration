import React, { useState } from 'react';
import { Container, NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';


export default function Cart(props) {
    const { cartItems, onRemove, } = props
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()

    var totalCost = 0
    var coursesInCart = []

    cartItems.forEach(element => {
        totalCost = element.price + totalCost
        coursesInCart.push(element.name.replace(' Course', ''))
    });

    localStorage.setItem('totalCost', totalCost)
    localStorage.setItem('coursesInCart', coursesInCart)

    return (
        <>
            <Button
                onClick={handleShow}
                style={{ width: "3rem", height: "3rem", position: 'absolute', right: '16px' }}
                variant="outline-primary"
                className="rounded-circle "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                >
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Courses Registered</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ alignItems: 'center' }}>
                    <Container>
                        <div>
                            {cartItems.length === 0 && <div>Cart is empty,please add courses you want to register! </div>}
                            {cartItems.map(item => (
                                <div class="container">
                                    <br />
                                    <div class="row">
                                        <div class="col-xs-8">
                                            <div class="panel panel-info">
                                                <div class="panel-body">
                                                    <div class="row">
                                                        <div className="cart-items">
                                                            <div><img src={item.image} style={{ height: '7rem', width: '15rem', borderStyle: 'ridge', borderRadius: '20px' }} />
                                                            </div>
                                                            <br />
                                                            <div class="col-xs-4">
                                                                <h4 class="product-name"><strong>{item.name}</strong></h4>
                                                            </div>
                                                            <div class="col-xs-6">
                                                                <div class="col-xs-6 text-right">
                                                                    <h6><strong>{`$ ${item.price}`}</strong></h6>
                                                                </div>
                                                                <div class="col-xs-4">
                                                                    <button type="button" class="btn btn-danger btn-act" onClick={() => onRemove(item)}>Remove</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Offcanvas.Body>
                <div class="panel">
                    <div class="row text-center">
                        <div class="col-xs-9">
                            <h4 class="text-right">Total <strong>{`$ ${totalCost}`}</strong></h4>
                        </div>
                        <div class="col-xs-3">
                            <button type="button" class="btn btn-success btn-block btn-act" onClick={() => {
                                if (totalCost === 0) {
                                    alert('Do not have any course in cart! ')
                                }
                                else {
                                    navigate('/payment')
                                }

                            }}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </Offcanvas>
            {

            }
        </>
    );
}
