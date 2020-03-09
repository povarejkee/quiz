import React, { useState } from 'react'
import styles from './quiz.module.css'
import ActiveQuiz from '../../components/active-quiz'
import QuizContext from '../../context/quiz-context'

const quiz = [
  {
    id: 1,
    question: 'Какого цвета небо?',
    rightAnswer: 3,
    answers: [
      {
        text: 'Желтое',
        id: 1,
      },
      {
        text: 'Красное',
        id: 2,
      },
      {
        text: 'Синее',
        id: 3,
      },
      {
        text: 'Зеленое',
        id: 4,
      },
    ],
  },
  {
    id: 2,
    question: 'В каком году основал Санкт-Петербург?',
    rightAnswer: 2,
    answers: [
      {
        text: '1701',
        id: 1,
      },
      {
        text: '1703',
        id: 2,
      },
      {
        text: '703',
        id: 3,
      },
      {
        text: '1705',
        id: 4,
      },
    ],
  },
]

const Quiz = () => {
  const [active, changeActive] = useState(0)

  const onAnswerClick = id => {
    console.log(active, quiz.length)

    if (id === quiz[active].rightAnswer) {
      changeActive(active + 1)
    } else {
      console.error('Неправильный ответ')
    }
  }

  return (
    <QuizContext.Provider
      value={{
        quiz,
        onAnswerClick,
        active,
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
