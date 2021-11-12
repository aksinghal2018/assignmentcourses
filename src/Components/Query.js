import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
function Query() {
    const [query, setquery] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/userquery').then(
            res=>setquery(res.data)
        )
    }, [])
    return (
        <Container>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>name</th>
      <th>email</th>
      <th>mobile</th>
      <th>comment</th>
    </tr>
  </thead>
  <tbody>
      {
          query.map((item,index)=>{
              return(
                  <tr>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.mobile}</td>
                      <td>{item.comment}</td>
                      </tr>
              )
          })
      }
  </tbody>
</Table>
        </Container>    )
}

export default Query
