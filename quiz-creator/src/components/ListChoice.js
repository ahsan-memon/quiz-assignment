import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';

let empty = true;
const ListChoice = () => {

  const history = useHistory();
  if (empty)
    return (
      <div style={{ height: "200px" }} className="border d-flex justify-content-center align-items-center">
        <Button className="px-3" variant="primary" onClick={() => { history.push("/createChoice") }}>Add Choice</Button>
      </div>
    )
  else return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Text</th>
            <th>Is Correct</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem Ipsum</td>
            <td>Yes</td>
            <td>action1</td>
          </tr>

        </tbody>
      </Table>
      <div className="d-flex flex-row-reverse ">
        <Button className="px-3" variant="outline-primary" onClick={() => { history.push("/createChoice") }}>Add Choice</Button>
      </div>
    </>
  )
}
export default ListChoice;