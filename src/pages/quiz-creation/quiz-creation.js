import React from 'react'
import styles from './quiz-creation.module.css'
import Input from '../../components/input'
import Button from '../../components/button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Select from '../../components/select'

const variant = Yup.string()
  .required('Обязательно к заполнению')
  .min(1, 'Описание должно быть не менее 1 символа')
  .max(150, 'Слишком длинное описание')

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Обязательно к заполнению')
    .min(1, 'Описание должно быть не менее 1 символа'),
  first: variant,
  second: variant,
  third: variant,
  fourth: variant,
})

const QuizCreation = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      first: '',
      second: '',
      third: '',
      fourth: '',
      correct: 1,
    },
    onSubmit: values => console.log(values),
    validationSchema,
    enableReinitialize: true,
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.quizCreation}>
        <h1 className={styles.title}>Создание теста</h1>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <Input
            className={styles.formItem}
            label="Введите вопрос"
            type="text"
            value={formik.values.title}
            name="title"
            onChange={formik.handleChange}
            errorMessage={formik.errors.title}
          />
          <Input
            className={styles.formItem}
            label="Вариант 1"
            type="text"
            value={formik.values.first}
            name="first"
            onChange={formik.handleChange}
            errorMessage={formik.errors.first}
          />
          <Input
            className={styles.formItem}
            label="Вариант 2"
            type="text"
            value={formik.values.second}
            name="second"
            onChange={formik.handleChange}
            errorMessage={formik.errors.second}
          />
          <Input
            className={styles.formItem}
            label="Вариант 3"
            type="text"
            value={formik.values.third}
            name="third"
            onChange={formik.handleChange}
            errorMessage={formik.errors.third}
          />
          <Input
            className={styles.formItem}
            label="Вариант 4"
            type="text"
            value={formik.values.fourth}
            name="fourth"
            onChange={formik.handleChange}
            errorMessage={formik.errors.fourth}
          />
          <Select
            className={styles.formItem}
            label="Правильный ответ"
            value={formik.values.correct}
            options={[
              { value: 1, title: 1 },
              { value: 2, title: 2 },
              { value: 3, title: 3 },
              { value: 4, title: 4 },
            ]}
            name="correct"
            onChange={formik.handleChange}
            errorMessage={formik.errors.correct}
          />
          <Button type="primary" className={styles.btn} htmlType="submit">
            Добавить вопрос
          </Button>
          <Button type="success" className={styles.btn}>
            Создать тест
          </Button>
        </form>
      </div>
    </div>
  )
}

export default QuizCreation
