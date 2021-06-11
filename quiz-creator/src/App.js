import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import FormCreate from './components/FormCreate'
import Question from './components/Question'

import { Container } from "react-bootstrap"

function App() {
  return (
    <Container className="mt-5 w-50">
      <FormCreate />
      {/* <Qulestion /> */}
    </Container>
  );
}

export default App;
