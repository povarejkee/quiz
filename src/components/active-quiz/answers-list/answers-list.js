import React, { useContext } from 'react'
import AnswerItem from './answer-item'
import QuizContext from '../../../context/quiz-context'

const AnswersList = () => {
  const context = useContext(QuizContext)
  const { quiz, active } = context

  return (
    <ul>
      {quiz[active].answers.map(answer => {
        return <AnswerItem item={answer} key={answer.id} />
      })}
    </ul>
  )
}

export default AnswersList
