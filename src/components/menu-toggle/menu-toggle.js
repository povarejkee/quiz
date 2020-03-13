import React from 'react'
import styles from './menu-toggle.module.css'
import classnames from 'classnames'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const MenuToggle = props => {
  const { open, toggleOpen } = props

  return (
    <span
      className={classnames(styles.menuToggle, {
        [styles.open]: open,
      })}
      onClick={() => toggleOpen(!open)}>
      {open ? <AiOutlineClose /> : <AiOutlineMenu />}
    </span>
  )
}

export default MenuToggle
