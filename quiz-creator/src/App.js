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
export const tempProvider = React.createContext();
export const tempQuizProvider = React.createContext();

function App() {
  const [choiceInfo, setChoiceInfo] = useState([
  ])

  const [questionInfo, setQuestionInfo] = useState([
  ])

  const [tempQuiz, setTempQuiz] = useState({})

  const [temp, setTemp] = useState([])


  return (
    <Container className="mt-5 w-50">

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {<Quizzes />}
          </Route>


          <Route path="/createQuiz">
            <questionProvider.Provider value={[questionInfo, setQuestionInfo]}>
              <tempQuizProvider.Provider value={[tempQuiz, setTempQuiz]}>
                <FormCreate />
              </tempQuizProvider.Provider>
            </questionProvider.Provider>
          </Route>


          <Route path="/createQuestion">
            <questionProvider.Provider value={[questionInfo, setQuestionInfo]}>
              <choiceProvider.Provider value={[choiceInfo, setChoiceInfo]}>
                <tempProvider.Provider value={[temp, setTemp]}>
                  <Question />
                </tempProvider.Provider>
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
