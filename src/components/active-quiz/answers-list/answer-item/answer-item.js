import React, { useContext } from 'react'
import styles from './answer-item.module.css'
import QuizContext from '../../../../context/quiz-context'

const AnswerItem = props => {
  const { item } = props
  const context = useContext(QuizContext)

  return (
    <li
      className={styles.answer}
      onClick={() => context.onAnswerClick(item.id)}>
      {item.text}
    </li>
  )
}

export default AnswerItem
