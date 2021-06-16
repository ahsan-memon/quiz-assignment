import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { questionProvider } from '../App'

let empty = false;
const ListQuestion = () => {
  const history = useHistory();
  const [questionInfo, setQuestionInfo] = useContext(questionProvider)

  if (questionInfo.length == 0)
    return (
      <div style={{ height: "200px" }} className="border d-flex justify-content-center align-items-center">
        <Button className="px-3" variant="primary" onClick={() => { history.push("/createQuestion") }}>Add Question</Button>
      </div>
    )
  else return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Text</th>
            <th>Type</th>
            <th>Choices</th>
            <th>Points</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>

          {questionInfo.map((q) => {
            return (
              <tr>
                <td>{q["question"]}</td>
                <td>{q["type"]}</td>
                <td>{q["choices"].length}</td>
                <td>{q["points"]}</td>
                {/* <td>{q["actions"]}</td> */}

              </tr>
            )
          })}

        </tbody>
      </Table>
      <div className="d-flex flex-row-reverse ">
        <Button className="px-3" variant="outline-primary" onClick={() => { history.push("/createQuestion") }}>Add Question</Button>
      </div>
    </>
  )
}
export default ListQuestion;