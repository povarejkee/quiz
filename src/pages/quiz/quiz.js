import React from 'react'
import styles from './quiz.module.css'
import ActiveQuiz from '../../components/active-quiz'
import QuizContext from '../../context/quiz-context'

const answers = [
  {
    text: 'Вопрос 1',
  },
  {
    text: 'Вопрос 2',
  },
  {
    text: 'Вопрос 3',
  },
  {
    text: 'Вопрос 4',
  },
]

const Quiz = () => {
  return (
    <QuizContext.Provider
      value={{
        answers,
      }}>
      <div className={styles.wrapper}>
        <div className={styles.quiz}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz />
        </div>
      </div>
    </QuizContext.Provider>
  )
}

export default Quiz
