
import React, { useState, useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import ListQuestion from './ListQuestion';
import { useHistory } from 'react-router';
import { questionProvider, tempQuizProvider } from '../App'

const FormCreate = () => {
  const axios = require('axios').default;

  const [questionInfo, setQuestionInfo] = useContext(questionProvider)
  const history = useHistory();
  const [tempQuiz, setTempQuiz] = useContext(tempQuizProvider)

  let refTitle = React.createRef()
  let refPoints = React.createRef()
  let refTime = React.createRef()
  let refDeadline = React.createRef()


  useEffect(() => {
    refTitle.current.value = tempQuiz.title == undefined ? "" : tempQuiz.title
    refPoints.current.value = tempQuiz.points == undefined ? "" : tempQuiz.points
    refTime.current.value = tempQuiz.time == undefined ? "" : tempQuiz.time
    refDeadline.current.value = tempQuiz.deadline == undefined ? "" : tempQuiz.deadline
  }, [])



  function addQuiz() {

    tempQuiz.questions = [...questionInfo]
    axios.post("http://localhost:8080/Quiz", tempQuiz)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    setQuestionInfo([]);

    tempQuiz.title = ""
    tempQuiz.points = ""
    tempQuiz.time = ""
    tempQuiz.deadline = ""

    //----------HERE
    //Send the questionInfo contining all question via jsonn

    history.push("/")
  }

  return (
    <Container className="border" >
      <Form >
        <p className="text-center m-0"><b>Create a Quiz</b></p>
        <Row className='mb-3'>
          <Col>
            <Form.Label>Quiz Title</Form.Label>
            <Form.Control placeholder="Enter Quiz Title" ref={refTitle}
              onChange={e => (tempQuiz.title = e.target.value)} />
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col>
            <Form.Label>Total Points</Form.Label>
            <Form.Control placeholder="Enter Total Points" ref={refPoints} type="number" onChange={e => (tempQuiz.points = e.target.value)} />
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col>
            <Form.Label>Time Allowed (minutes)</Form.Label>
            <Form.Control placeholder="Enter Time in minutes" ref={refTime} type="number" onChange={e => (tempQuiz.time = e.target.value)} />
          </Col>
          <Col>
            <Form.Label>Deadline</Form.Label>
            <Form.Control type="date" ref={refDeadline} onChange={e => (tempQuiz.deadline = e.target.value)} />
          </Col>
        </Row>

        <p className="text-center"><b>Questions</b></p>

        <Row className='mb-4'>
          <Col>
            <ListQuestion />
          </Col>

        </Row>

        <div className="d-flex flex-row-reverse">
          <Button variant="primary" className="m-2" type="button" onClick={() => addQuiz()}>
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