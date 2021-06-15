import React, { useState, useContext } from 'react'
import { Button, Form, Col, Row, Container, } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { choiceProvider } from '../App'

export default function Choice() {

    const [choiceInfo, setChoiceInfo] = useContext(choiceProvider)
    const history = useHistory();

    let choice = "";
    let isCorrect = "false";

    function addChoice() {
        //Updating the values
        choiceInfo.push({
            "choice": choice,
            "isCorrect": isCorrect.toString(),
        })
        history.push("/createQuestion")
    }


    return (
        <Container className="border p-3 w-75">
            <Form >
                <h2><b>Choice</b></h2>
                <Row className='mb-3'>
                    <Col>
                        <Form.Control placeholder="Write Choice Here"
                            onChange={e => (choice = e.target.value)} />

                        <input className="form-check-input" type="checkbox" value="single" name="choice" onChange={e => (isCorrect = e.target.checked)} /> Correct Option
                        <br />
                    </Col>
                </Row>
                <div className="d-flex flex-row-reverse">
                    <Button className="p-2" variant="primary" className="m-2" onClick={() => addChoice()}>
                        Add Choice
                    </Button>
                    <Button className="p-2" variant="light" className="m-2 border" onClick={() => { history.push("/createQuestion") }}>
                        Cancel
                    </Button>
                </div>

            </Form>
        </Container>
    )
}
