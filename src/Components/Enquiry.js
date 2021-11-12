import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Form,Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import {namecheck,emailcheck,mobilecheck,addresscheck,commentcheck} from './Validation'
function Enquiry() {
    let {id}=useParams();
    const history = useHistory();
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const [address, setaddress] = useState("")
    const [comment, setcomment] = useState("")
    const [errorname, seterrorname] = useState("")
    const [erroremail, seterroremail] = useState("")
    const [errormobile, seterrormobile] = useState("")
    const [erroraddress, seterroraddress] = useState("")
    const [errorcomment, seterrorcomment] = useState("")
    const handlechange=(e)=>{
        const name=e.target.name
        if(name=="name"){
            seterrorname(namecheck(e.target.value))
            setname(e.target.value)
        }
        if(name=="email"){
            seterroremail(emailcheck(e.target.value))
            setemail(e.target.value)
        }
        if(name=="mobile"){
            seterrormobile(mobilecheck(e.target.value))
            setmobile(e.target.value)
        }
        if(name=="address"){
            seterroraddress(addresscheck(e.target.value))
            setaddress(e.target.value)
        }
        else{
            seterrorcomment(commentcheck(e.target.value))
            setcomment(e.target.value)
        }
    }
    const submit=(e)=>{
        e.preventDefault()
        const data={"name":name,"email":email,"mobile":mobile,"address":address,"comment":comment}
        axios.post("http://localhost:3001/userquery",data).then(
            res=>console.log(res.data)
        ).catch(
            err=>console.log(err.data)
        )
        

            }
    return (
        <Container style={{padding:"50px",border:"2px solid black"}}>
            <h1>Enquiry for Course/{id} </h1>
        <Form onSubmit={submit}> 
        <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="name" name="name" onChange={handlechange} autoComplete="new-password"/>
                {errorname}
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handlechange} autoComplete="new-password" />
                {erroremail}<br/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Mobile" name="mobile" onChange={handlechange} autoComplete="new-password"/>
                {errormobile}
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="address" name="address" onChange={handlechange} autoComplete="new-password"/>
                {erroraddress}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comment</Form.Label>
    <Form.Control as="textarea" rows={3} name="comment" onChange={handlechange}/>
    {errorcomment}
  </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )
}

export default Enquiry
