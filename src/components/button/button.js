import React from 'react'
import styles from './button.module.css'
import classnames from 'classnames'

const Button = props => {
  const {
    className,
    style,
    type,
    onClick,
    children,
    disabled,
    htmlType,
  } = props

  return (
    <button
      style={style}
      className={classnames(styles.btn, className, {
        [styles.primary]: type === 'primary',
        [styles.success]: type === 'success',
      })}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}>
      {children}
    </button>
  )
}

export default Button
