import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/layout'
import Quiz from './pages/quiz'
import QuizList from './pages/quiz-list'
import Auth from './pages/auth'
import QuizCreation from './pages/quiz-creation'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/" exact>
            <QuizList />
          </Route>
          <Route path="/quiz/:id">
            <Quiz />
          </Route>
          <Route path="/quiz-creation">
            <QuizCreation />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
