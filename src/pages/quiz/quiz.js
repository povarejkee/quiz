import React, { useState } from 'react'
import styles from './quiz.module.css'
import ActiveQuiz from '../../components/active-quiz'
import QuizContext from '../../context/quiz-context'
import Results from '../../components/results'

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
    question: 'В каком году основан Санкт-Петербург?',
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
  const [answerState, setAnswerState] = useState(null)
  const [finished, setFinished] = useState(false)
  const [result, setResult] = useState({})

  const onAnswerClick = answerId => {
    const questionId = quiz[active].id
    const rightAnswerId = quiz[active].rightAnswer
    const isLastQuestion = active + 1 === quiz.length

    if (answerId === rightAnswerId) {
      setAnswerState({ [answerId]: 'success' })

      if (!result[questionId]) {
        setResult({ [questionId]: 'success', ...result })
      }

      if (!isLastQuestion) {
        const timeout = setTimeout(() => {
          changeActive(active + 1)
          setAnswerState(null)
          clearTimeout(timeout)
        }, 1000)
      } else {
        setFinished(true)
      }
    } else {
      setAnswerState({ [answerId]: 'error' })
      setResult({ [questionId]: 'error', ...result })
    }
  }

  return (
    <QuizContext.Provider
      value={{
        quiz,
        onAnswerClick,
        active,
        answerState,
        result,
      }}>
      <div className={styles.wrapper}>
        <div className={styles.quiz}>
          <h1 className={styles.title}>Ответьте на все вопросы</h1>
          {!finished ? <ActiveQuiz /> : <Results />}
        </div>
      </div>
    </QuizContext.Provider>
  )
}

export default Quiz
