
import React, { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import ListQuestion from './ListQuestion';
import { useHistory } from 'react-router';
import { questionProvider } from '../App'

const FormCreate = () => {

  // ----HERE-------------
  const [questionInfo, setQuestionInfo] = useContext(questionProvider)
  console.log(questionInfo)

  const history = useHistory();
  const [quizInfo, setQuizInfo] = useState({
    "title": "",
    "points": "",
    "time": "",
    "deadline": "",
    // "questions": [{ "choices": [] }]

  })

  function temp() {
    console.log(quizInfo)
  }

  return (
    <Container className="border" >
      <Form >
        <p className="text-center m-0"><b>Create a Quiz</b></p>
        <Row className='mb-3'>
          <Col>
            <Form.Label>Quiz Title</Form.Label>
            <Form.Control placeholder="Enter Quiz Title"
              onChange={e => (quizInfo.title = e.target.value)} />
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col>
            <Form.Label>Total Points</Form.Label>
            <Form.Control placeholder="Enter Total Points" type="number" onChange={e => (quizInfo.points = e.target.value)} />
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col>
            <Form.Label>Time Allowed (minutes)</Form.Label>
            <Form.Control placeholder="Enter Time in minutes" type="number" onChange={e => (quizInfo.time = e.target.value)} />
          </Col>
          <Col>
            <Form.Label>Deadline</Form.Label>
            <Form.Control type="date" onChange={e => (quizInfo.deadline = e.target.value)} />
          </Col>
        </Row>

        <p className="text-center"><b>Questions</b></p>

        <Row className='mb-4'>
          <Col>
            <ListQuestion />
          </Col>

        </Row>

        <div className="d-flex flex-row-reverse">
          <Button variant="primary" className="m-2" type="button" onClick={() => { history.push("/") }}>
            Create Quiz
          </Button>
          <Button variant="light" className="m-2 border" type="button" onClick={() => { history.push("/") }}>
            Cancel
          </Button>
        </div>

      </Form>
    </Container>
  )
}

export default FormCreate;