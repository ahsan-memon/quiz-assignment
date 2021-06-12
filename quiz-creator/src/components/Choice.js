import React from 'react'
import { Button, Form, Col, Row, Container, } from 'react-bootstrap';
import { useHistory } from 'react-router';

export default function Choice() {
    const history = useHistory();
    return (
        <Container className="border p-3 w-75">
            <Form >
                <h2><b>Choice</b></h2>
                <Row className='mb-3'>
                    <Col>
                        <p>It is a Choice.</p>

                        <input className="form-check-input" type="checkbox" value="single" name="choice" /> Correct Option
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
