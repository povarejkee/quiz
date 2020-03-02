import React from 'react'
import styles from './active-quiz.module.css'
import AnswersList from './answers-list'

const ActiveQuiz = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        <span>
          <strong>2. Как дела?</strong>
          &nbsp;
        </span>
        <small>4 из 12</small>
      </p>
      <AnswersList />
    </div>
  )
}

export default ActiveQuiz
