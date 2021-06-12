import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useContext, useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormCreate from './components/FormCreate'
import Question from './components/Question'
import Quizzes from './components/Quizzes'
import Choice from './components/Choice'
import { Container } from "react-bootstrap"


function App() {

  return (
    <Container className="mt-5 w-50">

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {<Quizzes />}
          </Route>

          <Route path="/createQuiz">
            <FormCreate />
          </Route>

          <Route path="/createQuestion">
            <Question />
          </Route>

          <Route path="/createChoice">
            <Choice />
          </Route>

        </Switch>
      </BrowserRouter>

    </Container>
  );
}

export default App;
