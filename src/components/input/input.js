import React from 'react'
import styles from './input.module.css'
import classnames from 'classnames'

const Input = props => {
  const { type, value, onChange, name, label, className, errorMessage } = props

  return (
    <div className={className}>
      <label className={styles.inputWrapper}>
        <span className={styles.label}>{label}</span>
        <input
          className={classnames(styles.input, {
            [styles.error]: errorMessage,
          })}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
        />
      </label>
      {errorMessage ? (
        <p className={styles.errorMessage}>{errorMessage}</p>
      ) : null}
    </div>
  )
}

export default Input
