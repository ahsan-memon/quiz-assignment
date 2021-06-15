import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Table, Image } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { choiceProvider, questionProvider } from '../App'

let empty = false;
const ListChoice = () => {
  const [choiceInfo, setChoiceInfo] = useContext(choiceProvider)

  const history = useHistory();
  if (choiceInfo.length == 0)
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
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>

          {choiceInfo.map((c) => {
            return (
              <tr>
                <td>{c["choice"]}</td>
                <td>{c["isCorrect"]}</td>
                {/* <td>{c["actions"]}</td> */}
              </tr>
            )
          })}

        </tbody>
      </Table>
      <div className="d-flex flex-row-reverse ">
        <Button className="px-3" variant="outline-primary" onClick={() => { history.push("/createChoice") }}>Add Choice</Button>
      </div>
    </>
  )
}
export default ListChoice;