import React, { useContext } from 'react'
import { Newcontext } from './RouterTableX'
import { Button, Form, Table } from 'react-bootstrap'
import '../style/Usertable.css'

function UserTable() {
    const [data,setData]= useContext(Newcontext)
    console.log(data)
  return (
    <div>
        <Form className="d-flex mt-5">
            <label>Search input</label>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Sarch</Button>
          </Form>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item)=><>
        <tr>
          <td>{item.no}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.qualfcn}</td>
          <td><Button variant="success">Add</Button>{' '}</td>
          <td><Button variant="primary">Edit</Button>{' '}</td>
          <td><Button variant="danger">Danger</Button>{' '}</td>
        </tr>
        </>)}
        </tbody>
        </Table>


    </div>
  )
}

export default UserTable