import React from 'react'
import { useState, useEffect,useRef } from 'react';
import { useDispatch } from 'react-redux';
import {namecheck,emailcheck,agecheck,addresscheck,passwordcheck} from './Validation'
import { useSelector } from 'react-redux';
import axios from 'axios'
function Details() {
    const [errorname, setName] = useState("");
    const [erroremail, setEmail] = useState("");
    const [errorage, setAge] = useState("");
    const [erroraddress, setAddress] = useState("");
    const [errorgender, seterrroGender] = useState("");
    const [errorpassword, setpassword] = useState("")
    const [errorconfirmpassword, seterrorconfirmpassword] = useState("")
    const [gender, setGender] = useState("");
    const [user, setuser] = useState([])
    const [currentuser, setcurrentuser] = useState({})
    const [state, setstate] = useState(1)
    const inputE1 = useRef(null);
    const inputE2 = useRef(null);
    const inputE3 = useRef(null);
    const inputE4 = useRef(null);
    const inputE5 = useRef(null);
    const inputE6 = useRef(null);
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get("http://localhost:3001/user").then(
            res=>setuser(res.data)
        )
    }, [])
  
    const handler = (e) => {
        setGender(e.target.value)
    }
    const checkuser=(value)=>{
        let availale=false
        user.map(item=>{
            if(item.email==value){
                availale=true
                setcurrentuser(item)
            }
        })
        return availale
    }
   
    const handlererror=(e)=>{
        const name=e.target.name;
        if(name=='name'){
            setName(namecheck(inputE1.current.value))
        }
        if(name=='email'){
            setEmail(emailcheck(inputE2.current.value))
        }
        if(name=='age'){
            setAge(agecheck(inputE3.current.value))
        }
        if(name=='address'){
            setAddress(addresscheck(inputE4.current.value))
        }
        if(name=="password"){
            setpassword(passwordcheck(inputE5.current.value))
        }
        if(name=="confirmpassword"){
            if(inputE5.current.value!==inputE6.current.value){
                seterrorconfirmpassword("password and confirm password not same")
            }
            else{
                seterrorconfirmpassword("")
            }
        }
        
    }
    const submit = (event) => {
        event.preventDefault()
        if(gender==""){
            seterrroGender("gender feild cannot be empty");
        }
        if(inputE1.current.value=="" || inputE2.current.value=="" || inputE3.current.value=="" || inputE4.current.value=="" || inputE5.current.value=="" || inputE6.current.value=="" ){
            alert("feild cannot empty!");
        }
        else{
        if(errorname=="" && erroremail=="" && errorage=="" && erroraddress=="" && gender!=="" && errorpassword=="" && errorconfirmpassword==""){
            if(checkuser(inputE2.current.value)==false){
            let formData={name:inputE1.current.value,email:inputE2.current.value,age:inputE3.current.value,address:inputE4.current.value,gender:gender,password:inputE5.current.value};
            dispatch({type:'fetch',payload:formData})
            axios.post("http://localhost:3001/user",formData).then(
                res=>console.log(res.data)
            ).catch(
                err=>console.log(err.data)
            )
            console.log(formData)
            setstate(state+1)
            alert("Register Successfully")}
            else{
                alert("already registred ")
            }
            //console.log({name,email,age,address})
        }
        else{
            alert("error occur")
        }
    }
    }
return (

        <div className="container mt-4" style={{border:"2px solid black",padding:"30px"}}>
            {/* {state}
            <button type="button" onClick={()=>dispatch({type:'Inc_count'})}>Add</button>
            <button type="button" onClick={()=>dispatch({type:'Dec_count'})}>Dec</button> */}
            <h1> <u>Details</u></h1>
            <form onSubmit={submit}>
                <div className="form-group" style={{margin:"20px"}}>
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control"  ref={inputE1} placeholder="Enter name" name="name" onChange={handlererror} />
                    {errorname!==""?<div>{errorname}</div>:<></>}
                </div>
                <div className="form-group" style={{margin:"20px"}}>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control"  ref={inputE2} placeholder="Enter email" name="email" onChange={handlererror}/>
                    {erroremail!==""?<div>{erroremail}</div>:<></>}
                </div>
                <div className="form-group" style={{margin:"20px"}}>
                    <label htmlFor="exampleInputEmail1">Age</label>
                    <input type="Number" className="form-control"  ref={inputE3} placeholder="Enter age" name="age" onChange={handlererror}/>
                    {errorage!==""?<div>{errorage}</div>:<></>}
                </div>
                <div className="form-group" style={{margin:"20px"}}>
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control"  ref={inputE4} placeholder="Enter Address" name="address" onChange={handlererror}/>
                    {erroraddress!==""?<div>{erroraddress}</div>:<></>}
                </div>
                <fieldset className="form-group" style={{margin:"20px"}}>
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" ref={inputE5} name="gridRadios" id="gridRadios1" value="male"  onChange={handler}/>
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" ref={inputE5} name="gridRadios" id="gridRadios2" value="female" onChange={handler}/>
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    Female
                                </label>
                            </div>

                        </div>
                        {errorgender!==""?<div>{errorgender}</div>:<></>}
                    </div>
                </fieldset>
                <div className="form-group" style={{margin:"20px"}}>
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control"  ref={inputE5} placeholder="Enter Password" name="password" onChange={handlererror}/>
                    {errorpassword!==""?<div>{errorpassword}</div>:<></>}
                </div>
                <div className="form-group"style={{margin:"20px"}}>
                    <label htmlFor="inputConfirmPasswprd">Confirm Password</label>
                    <input type="password" className="form-control"  ref={inputE6} placeholder="Enter Confirm Password" name="confirmpassword" onChange={handlererror}/>
                    {errorconfirmpassword!==""?<div>{errorconfirmpassword}</div>:<></>}
                </div>
                

                <button type="submit" className="btn btn-primary" style={{margin:"20px"}}>Submit</button>
            </form>
            <div>
                     
            </div>
        </div>
    )
}

export default Details
