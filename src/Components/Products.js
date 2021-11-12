import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
function Products() {
    const history = useHistory();
    const [products, setproducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/products').then(
            res => setproducts(res.data)
        )
    }, [])
    return (
        <Container>
            <Row>
                {
                    products.map(
                        item => {
                            return (
                                <Col xs={4} style={{ width: '320px',height:"400px" ,margin:"30px"}} >
                                    <Card >
                                        <Card.Img variant="top" src={item.images} style={{width:"290px",height:"200px"}} />
                                        <Card.Body>
                                            <Card.Title>{item.pname}</Card.Title>
                                            <Card.Text>
                                                <p>Price={item.price}Rs</p>
                                                <p>Qyantity={item.quantity}</p>
                                            </Card.Text>
                                            <Button variant="primary" onClick={()=>{history.push('/enquiry/')}}>Details</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                    )
                }
            </Row>
        </Container>
    )
}

export default Products
