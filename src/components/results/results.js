import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './results.module.css'
import QuizContext from '../../context/quiz-context'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import Button from '../button'

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
      <div className={styles.actions}>
        <Button onClick={context.onRetry} type="primary">
          Повторить
        </Button>
        <Button type="success" style={{ marginLeft: 10 }}>
          <Link to="/">К списку тестов</Link>
        </Button>
      </div>
    </div>
  )
}

export default Results
