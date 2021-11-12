import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

function Courses() {
    const history = useHistory();
    const [courses, setcourses] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/courses').then(
            res => setcourses(res.data)
        )
    }, [])
    return (
        <Container>
            <Row>
                {
                    courses.map(
                        item => {
                            return (
                                <Col xs={4} style={{ width: '320px' ,margin:"30px"}} >
                                    <Card >
                                        <Card.Body>
                                        <Card.Img variant="top" src={'../Images/images.jpg'} style={{width:"250px",margin:"7px",marginLeft:"7px"}} />
                                            <Card.Title>{item.coursesname}</Card.Title>
                                            
                                            <Card.Text style={{backgroundColor:"lightblue"}}>
                                                <p>Course link:</p>
                                                <a href={item.courselink} >{item.courselink}</a>
                                              
                                              </Card.Text>
                                            <Button variant="primary" onClick={()=>{history.push(`/enquiry/${item.id}`)}}>Details</Button>
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

export default Courses
