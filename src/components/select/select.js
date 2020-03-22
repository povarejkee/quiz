import React from 'react'
import styles from './select.module.css'
import classnames from 'classnames'

const Select = props => {
  const {
    value,
    onChange,
    name,
    label,
    className,
    errorMessage,
    options,
  } = props

  return (
    <div className={className}>
      <label className={styles.selectWrapper}>
        <span className={styles.label}>{label}</span>
        <select
          className={classnames(styles.select, {
            [styles.error]: errorMessage,
          })}
          value={value}
          onChange={onChange}
          name={name}>
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            )
          })}
        </select>
      </label>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  )
}

export default Select
