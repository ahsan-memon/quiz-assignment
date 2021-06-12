import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';

let empty = true;
const ListQuestion = () => {
  const history = useHistory();
  if (empty)
    return (
      <div style={{ height: "200px" }} className="border d-flex justify-content-center align-items-center">
        <Button className="px-3" variant="primary" onClick={() => { history.push("/createQuestion") }}>Add Question</Button>
      </div>
    )
  else return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Text</th>
          <th>Type</th>
          <th>Choices</th>
          <th>Points</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lorem Ipsum</td>
          <td>Multiple Choice</td>
          <td>5</td>
          <td>10</td>
          <td>a</td>
        </tr>

      </tbody>
    </Table>
  )
}
export default ListQuestion;