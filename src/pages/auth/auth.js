import React from 'react'
import styles from './auth.module.css'
import Button from '../../components/button'

const Auth = () => {
  const onSubmit = event => {
    event.preventDefault()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.auth}>
        <h1 className={styles.title}>Авторизация</h1>
        <form className={styles.form} onSubmit={onSubmit}>
          <input type="text" />
          <input type="text" />
          <Button type="success">Войти</Button>
          <Button type="primary">Регистрация</Button>
        </form>
      </div>
    </div>
  )
}

export default Auth
