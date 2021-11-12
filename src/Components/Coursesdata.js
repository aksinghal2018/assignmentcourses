import React from 'react'
import { useState, useEffect,useRef } from 'react';
import { useDispatch } from 'react-redux';
import {namecheck,emailcheck,agecheck,addresscheck,passwordcheck} from './Validation'
import { useSelector } from 'react-redux';
import axios from 'axios'
function Coursesdata() {
    const [course, setcourse] = useState("")
    const [courselink, setcourselink] = useState("")
    const [courses, setcourses] = useState([])
    const [state, setstate] = useState(1)
    const inputE1 = useRef(null);
    const inputE2 = useRef(null);
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get("http://localhost:3001/courses").then(
            res=>setcourses(res.data)
        )
    }, [state])
    const checkcourse=(value)=>{
        let availale=false
        courses.map(item=>{
            if(item.coursesname==value){
                availale=true
            }
        })
        return availale
    }
    const submit=(e)=>{
        e.preventDefault()
        setstate(state+1)
        const data={"coursesname":inputE1.current.value,"courselink":inputE2.current.value}
        if(checkcourse(inputE1.current.value)==true){
        alert("already available")    
        }
        else{
        axios.post("http://localhost:3001/courses",data).then(
            res=>console.log(res.data)
        )
        alert("course added")
        }
    }
    const handlererror=(e)=>{
        if(e.target.name=="course"){
            setcourse(inputE1.current.value)
        }
        else{
            setcourselink(inputE2.current.value)
        }
    }
    return (
        <div className="container mt-4" style={{border:"2px solid black",padding:"20px",paddingRight:"50px"}}>
            <h1> Course data</h1>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="coursename" style={{margin:"5px"}}>Course Name</label>
                    <input type="text" className="form-control"  ref={inputE1} placeholder="Enter Course name" name="course" onChange={handlererror} style={{margin:"20px"}}/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="courselink" style={{margin:"5px"}}>Course Link</label>
                    <input type="text" className="form-control"  ref={inputE2} placeholder="Enter course link" name="courselink" onChange={handlererror} style={{margin:"20px"}}/>
                  
                </div>
                <button type="submit" className="btn btn-primary" style={{margin:"20px"}}>Add course</button>
       </form></div>
    )
}

export default Coursesdata
