import React from 'react'
import styles from './active-quiz.module.css'

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
      <ul>
        <li>1. Норм</li>
        <li>2. Збс</li>
        <li>3. Х</li>
        <li>4. Плохо</li>
      </ul>
    </div>
  )
}

export default ActiveQuiz
