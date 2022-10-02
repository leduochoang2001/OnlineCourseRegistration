import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cart from './cart';

import IMG from '../statics/img/search.png'

export default function Courses() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [cartItems, setCardItems] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [isTyping, setIsTyping] = useState(true)


    const onAdd = (itemParam) => {
        const exist = cartItems.find(x => x.id === itemParam.id)
        if (!exist) {
            cartItems.push(itemParam)
            setCardItems(cartItems)
        }
        else {
            alert('You have registered this course! ')
        }
    }

    const onRemove = (itemParam) => {
        const exist = cartItems.find(x => x.id === itemParam.id)
        if (exist)
            setCardItems(cartItems.filter(x => x.id !== itemParam.id))
    }

    const getItemSearch = (itemName) => {
        return items.filter(x => {
            return x.name.includes(itemName)
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/courses")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

    }
    return (
        <div className='container-course'>
            <div className='btn-home-cover'>
                <a href="/">
                    <button className='btn-home'><span>Home</span></button>
                </a>
            </div>
            <div className="search-cover">
                <div className='search-box'>
                    <input type="text" id='search-input' placeholder='Search Course'
                    />
                    <button id='btn-search' className='btn-act' onClick={() => {
                        setSearchInput(document.getElementById('search-input').value)
                        setIsTyping(false)
                    }}><img src={IMG} alt="" /></button>
                </div>
            </div>
            <Cart cartItems={cartItems} onRemove={onRemove}></Cart>
            <br /><br />
            {
                searchInput === '' ? <Container>
                    <Row>
                        {items.map(item => (
                            <Col xs="4" >
                                <div className="cardstl">
                                    <Card style={{ width: '18rem', margin: '16px' }} key={item.id}>
                                        <a href="/#!">
                                            <Card.Img variant="top" src={item.image} />
                                        </a>
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.description}
                                            </Card.Text>
                                            <Card.Text>
                                                {`$ ${item.price}`}
                                            </Card.Text>
                                            <Button variant="primary" className='cardstl btn-act'>View Course</Button>
                                            <Button onClick={() => onAdd(item)} variant="primary" className='cardstl btn-act' style={{ 'margin-left': '16px' }}>Register</Button>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>

                        ))}
                    </Row>
                </Container>
                    :
                    (<Container>
                        <Row>
                            {console.log(getItemSearch(searchInput))}
                            {getItemSearch(searchInput).map(item => (
                                <Col xs="4" >
                                    <div className="cardstl">
                                        <Card style={{ width: '18rem', margin: '16px' }}>
                                            <a href="/#!">
                                                <Card.Img variant="top" src={item.image} />
                                            </a>
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>
                                                    {item.description}
                                                </Card.Text>
                                                <Card.Text>
                                                    {`$ ${item.price}`}
                                                </Card.Text>
                                                <Button variant="primary" className='cardstl btn-act'>View Course</Button>
                                                <Button onClick={() => onAdd(item)} variant="primary" className='cardstl btn-act' style={{ 'margin-left': '16px' }}>Register</Button>

                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col >
                            ))}
                        </Row>
                    </Container>
                    )

            }

        </div >
    )
}
