import React from 'react'
import { Button, Table, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
export default function Quizzes() {
    const history = useHistory();
    return (
        <Container className="border">
            <h3 className="text-center m-2">List of available quizzes</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Quiz Title</th>
                        <th>Total Points</th>
                        <th>Time Allowed (Minutes)</th>
                        <th>Deadline</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Quiz: 01</td>
                        <td>150</td>
                        <td>60</td>
                        <td>25-06-2021</td>
                    </tr>

                </tbody>
            </Table>
            <div className="d-flex flex-row-reverse">
                <Button variant="primary" className="m-2" type="button" onClick={() => { history.push("/createQuiz") }}>
                    Create a new Quiz
                </Button>
            </div>
        </Container>
    )
}
