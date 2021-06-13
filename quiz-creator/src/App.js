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

export const choiceProvider = React.createContext();
export const questionProvider = React.createContext();


function App() {
  const [choiceInfo, setChoiceInfo] = useState({
    "choice": "",
    "isCorrect": ""
  })

  const [questionInfo, setQuestionInfo] = useState({
    "question": "",
    "type": "",
    "points": "",
    // "choices": ["yes", "no"]

  })


  return (
    <Container className="mt-5 w-50">

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {<Quizzes />}
          </Route>


          <Route path="/createQuiz">
            <questionProvider.Provider value={[questionInfo, setQuestionInfo]}>
              <FormCreate />
            </questionProvider.Provider>
          </Route>


          <Route path="/createQuestion">
            <questionProvider.Provider value={[questionInfo, setQuestionInfo]}>
              <choiceProvider.Provider value={[choiceInfo, setChoiceInfo]}>
                <Question />
              </choiceProvider.Provider>
            </questionProvider.Provider>
          </Route>

          <Route path="/createChoice">
            <choiceProvider.Provider value={[choiceInfo, setChoiceInfo]}>
              <Choice />
            </choiceProvider.Provider>

          </Route>

        </Switch>
      </BrowserRouter>

    </Container>
  );
}

export default App;
