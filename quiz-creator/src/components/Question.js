import React, { useContext, useEffect } from 'react'
import { Button, Form, Col, Row, Container, } from 'react-bootstrap';
import ListChoice from './ListChoice'
import { useHistory } from 'react-router';
import { choiceProvider, questionProvider, tempProvider } from '../App'



export default function Question() {
    const [choiceInfo, setChoiceInfo] = useContext(choiceProvider)
    const [questionInfo, setQuestionInfo] = useContext(questionProvider)
    const [temp, setTemp] = useContext(tempProvider);
    const history = useHistory();

    let refQ = React.createRef()
    let refP = React.createRef()

    useEffect(() => {
        refQ.current.value = temp.question == undefined ? "" : temp.question
        refP.current.value = temp.points == undefined ? "" : temp.points
    }, [])

    function addQuestion() {
        //Updating the values
        questionInfo.push({
            "question": temp.question,
            "type": temp.type,
            "points": temp.points,
            "choices": [...choiceInfo]
        })
        setChoiceInfo([]);
        temp.question = ""
        temp.points = ""


        history.push("/createQuiz")
    }


    return (
        <Container className="border">
            <Form >
                <h1><b>Question</b></h1>
                <Row className='mb-3'>
                    <Col>
                        <Form.Control placeholder="Write Question Here" ref={refQ}
                            onChange={e => (temp.question = e.target.value)} />
                    </Col>
                </Row>

                <Row className='mb-4'>
                    <Col>
                        <Form.Label>Type</Form.Label><br />
                        <div>
                            <input className="form-check-input" type="radio" value="single" name="choice" onChange={e => (temp.type = "Single")} /> Single Choice
                            <br />
                            <input className="form-check-input" type="radio" value="multiple" name="choice" onChange={e => (temp.type = "Multiple")} /> Multiple Choice
                            <br />

                        </div>
                    </Col>
                    <Col>
                        <Form.Label>Points</Form.Label>
                        <div>
                            <Form.Control ref={refP} placeholder="Enter Points" type="number"
                                onChange={e => (temp.points = e.target.value)} />
                            <br />
                        </div>
                    </Col>
                </Row>
                <p className="text-center"><b>Choices</b></p>
                <ListChoice />

                <div className="d-flex flex-row-reverse">
                    <Button className="p-2" variant="primary" className="m-2" onClick={() => addQuestion()}>
                        Create
                    </Button>
                    <Button className="p-2" variant="light" className="m-2 border" onClick={() => {
                        history.push("/createQuiz")
                    }}>
                        Cancel
                    </Button>
                </div>

            </Form>
        </Container>
    )
}
