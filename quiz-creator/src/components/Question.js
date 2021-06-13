import React, { useState } from 'react'
import { Button, Form, Col, Row, Container, } from 'react-bootstrap';
import ListChoice from './ListChoice'
import { useHistory } from 'react-router';

export default function Question() {
    const history = useHistory();
    const [questionInfo, setQuestionInfo] = useState({
        "question": "",
        "type": "",
        "points": "",
        // "choices": ["yes", "no"]

    })

    function temp() {
        console.log(questionInfo)
    }

    return (
        <Container className="border">
            <Form >
                <h1><b>Question</b></h1>
                <Row className='mb-3'>
                    <Col>
                        <Form.Control placeholder="Write Question Here"
                            onChange={e => (questionInfo.question = e.target.value)} />
                    </Col>
                </Row>

                <Row className='mb-4'>
                    <Col>
                        <Form.Label>Type</Form.Label><br />
                        <div>
                            <input className="form-check-input" type="radio" value="single" name="choice" onChange={e => (questionInfo.type = "Single Choice")} /> Single Choice
                            <br />
                            <input className="form-check-input" type="radio" value="multiple" name="choice" onChange={e => (questionInfo.type = "Multiple Choice")} /> Multiple Choice
                            <br />

                        </div>
                    </Col>
                    <Col>
                        <Form.Label>Points</Form.Label>
                        <div>
                            <Form.Control placeholder="Enter Points"
                                onChange={e => (questionInfo.points = e.target.value)} />
                            <br />
                        </div>
                    </Col>
                </Row>
                <p className="text-center"><b>Choices</b></p>
                <ListChoice />

                <div className="d-flex flex-row-reverse">
                    <Button className="p-2" variant="primary" className="m-2" onClick={() => { history.push("/createQuiz") }}>
                        Create
                    </Button>
                    <Button className="p-2" variant="light" className="m-2 border" onClick={() => { history.push("/createQuiz") }}>
                        Cancel
                    </Button>
                </div>

            </Form>
        </Container>
    )
}
