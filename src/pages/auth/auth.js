import React from 'react'
import styles from './auth.module.css'
import Button from '../../components/button'
import Input from '../../components/input'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Неправильный формат email')
    .required('Обязательно к заполнению'),
  password: Yup.string()
    .required('Обязательно к заполнению')
    .min(8, 'Пароль должен состоять минимум из 8 символов'),
})

const Auth = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => console.log(values),
    validationSchema,
    enableReinitialize: true,
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.auth}>
        <h1 className={styles.title}>Авторизация</h1>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <Input
            className={styles.formItem}
            label="Email"
            type="text"
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            errorMessage={formik.errors.email}
          />
          <Input
            className={styles.formItem}
            label="Пароль"
            type="text"
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
            errorMessage={formik.errors.password}
          />
          <Button type="success" className={styles.btn} htmlType="submit">
            Войти
          </Button>
          <Button type="primary" className={styles.btn}>
            Регистрация
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Auth
