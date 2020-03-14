import React from 'react'
import { Link } from 'react-router-dom'
import styles from './quiz-list.module.css'

const links = [1, 2, 3]

const QuizList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.quizList}>
        <h1 className={styles.title}>Список тестов</h1>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to={`/quiz/${link}`}>Тест {link}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default QuizList
