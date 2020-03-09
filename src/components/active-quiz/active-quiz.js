import React, { useContext } from 'react'
import styles from './active-quiz.module.css'
import AnswersList from './answers-list'
import QuizContext from '../../context/quiz-context'

const ActiveQuiz = () => {
  const context = useContext(QuizContext)
  const { quiz, active } = context

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        <span>
          <strong>{quiz[active].question}</strong>
          &nbsp;
        </span>
        <small>
          {active + 1} из {quiz.length}
        </small>
      </p>
      <AnswersList />
    </div>
  )
}

export default ActiveQuiz
