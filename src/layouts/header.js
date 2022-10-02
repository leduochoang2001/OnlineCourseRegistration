import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import IMG from '../statics/img/logo.png'

function Header() {

    return (
        <>
            <Navbar bg="transparent" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img className='logo' src={IMG} alt="" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default Header