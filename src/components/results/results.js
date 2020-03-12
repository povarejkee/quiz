import React, { useContext } from 'react'
import styles from './results.module.css'
import QuizContext from '../../context/quiz-context'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

const Results = () => {
  const context = useContext(QuizContext)
  const successAnswersCounter = Object.keys(context.result).reduce(
    (total, key) => {
      if (context.result[key] === 'success') {
        total++
      }
      return total
    },
    0
  )

  console.log(context.result)

  return (
    <div className={styles.wrapper}>
      <ul>
        {context.quiz.map((item, index) => {
          return (
            <li key={item.id} className={styles.question}>
              <span>{`${index + 1}) ${item.question}`}</span>
              {context.result[item.id] === 'success' ? (
                <AiOutlineCheck className={styles.iconSuccess} />
              ) : (
                <AiOutlineClose className={styles.iconError} />
              )}
            </li>
          )
        })}
      </ul>
      <div className={styles.results}>
        Правильно: {`${successAnswersCounter} из ${context.quiz.length}`}
      </div>
    </div>
  )
}

export default Results
