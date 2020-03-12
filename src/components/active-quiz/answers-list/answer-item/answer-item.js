import React, { useContext } from 'react'
import styles from './answer-item.module.css'
import classnames from 'classnames'
import QuizContext from '../../../../context/quiz-context'

const AnswerItem = props => {
  const { item } = props
  const context = useContext(QuizContext)
  const { onAnswerClick, answerState } = context

  return (
    <li
      className={classnames(styles.answer, {
        [styles.success]: answerState && answerState[item.id] === 'success',
        [styles.error]: answerState && answerState[item.id] === 'error',
      })}
      onClick={() => onAnswerClick(item.id)}>
      {item.text}
    </li>
  )
}

export default AnswerItem
