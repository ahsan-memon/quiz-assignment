import React, { useState } from 'react'
import { Button, Form, Col, Row, Container, } from 'react-bootstrap';
import { useHistory } from 'react-router';

export default function Choice() {
    const history = useHistory();
    const [choiceInfo, setQuestionInfo] = useState({
        "choice": "",
        "isCorrect": ""
    })

    function temp() {
        console.log(choiceInfo)
    }

    return (
        <Container className="border p-3 w-75">
            <Form >
                <h2><b>Choice</b></h2>
                <Row className='mb-3'>
                    <Col>
                        <Form.Control placeholder="Write Choice Here"
                            onChange={e => (choiceInfo.choice = e.target.value)} />

                        <input className="form-check-input" type="checkbox" value="single" name="choice" onChange={e => (choiceInfo.isCorrect = e.target.checked)} /> Correct Option
                        <br />
                    </Col>
                </Row>
                <div className="d-flex flex-row-reverse">
                    <Button className="p-2" variant="primary" className="m-2" onClick={() => { history.push("/createQuestion") }}>
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
