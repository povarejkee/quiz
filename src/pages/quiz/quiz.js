import React from 'react'
import styles from './quiz.module.css'
import ActiveQuiz from '../../components/active-quiz'

const Quiz = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.quiz}>
        <h1>Quiz</h1>
        <ActiveQuiz />
      </div>
    </div>
  )
}

export default Quiz
