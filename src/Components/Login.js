import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Form,Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
function Login() {
    const history = useHistory();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [user, setuser] = useState([])
    const [currentuser, setcurrentuser] = useState({})
    const [state, setstate] = useState(1)
    useEffect(() => {
        axios.get("http://localhost:3001/user").then(
            res=>setuser(res.data)
        )
    }, [])
    const checkuser=(value)=>{
        let availale=true
        user.map(item=>{
            if(item.email==value){
                availale=false
                setcurrentuser(item)
            }
        })
        return availale
    }
    const handlechange=(e)=>{
        const name=e.target.name
        if(name=="email"){
            setemail(e.target.value)
        }
        else{
            setpassword(e.target.value)
        }
    }
    const submit=(e)=>{
        e.preventDefault()
        if(checkuser(email)==true){
            alert("incorect email")
        }
        else{
            if(currentuser.password==password){
                localStorage.removeItem("currentuser")
                localStorage.setItem("currentuser",JSON.stringify(currentuser))
                alert("login Successfully")
                history.push('/courseadd');
                
            }
            else{
                alert("incorect username or password!")
            }
        }
    }
    return (
        <Container style={{padding:"50px",border:"2px solid black"}}>
            <h1>Login</h1>
        <Form onSubmit={submit}> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handlechange} autoComplete="new-password" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handlechange} autoComplete="new-password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )
}

export default Login
