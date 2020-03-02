import React, { useContext } from 'react'
import AnswerItem from './answer-item'
import QuizContext from '../../../context/quiz-context'

const AnswersList = () => {
  const context = useContext(QuizContext)

  return (
    <ul>
      {context.answers.map((answer, index) => {
        return <AnswerItem item={answer} key={index} />
      })}
    </ul>
  )
}

export default AnswersList
