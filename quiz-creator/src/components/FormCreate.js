
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import ListQuestion from './ListQuestion'
import { useHistory } from 'react-router';

const FormCreate = () => {
  const history = useHistory();
  return (
    <Container className="border" >
      <Form >
        <p className="text-center m-0"><b>Create a Quiz</b></p>
        <Row className='mb-3'>
          <Col>
            <Form.Label>Quiz Title</Form.Label>
            <Form.Control placeholder="Enter Quiz Title" />
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col>
            <Form.Label>Total Points</Form.Label>
            <Form.Control placeholder="Enter Total Points" />
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col>
            <Form.Label>Time Allowed (minutes)</Form.Label>
            <Form.Control placeholder="Enter Time in minutes" />
          </Col>
          <Col>
            <Form.Label>Deadline</Form.Label>
            <Form.Control type="date" />
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