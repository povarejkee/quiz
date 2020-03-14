import React, { useState } from 'react'
import styles from './layout.module.css'
import MenuToggle from '../menu-toggle'
import Drawer from '../drawer'

const Layout = ({ children }) => {
  const [open, toggleOpen] = useState(false)

  return (
    <div className={styles.layout}>
      <MenuToggle open={open} toggleOpen={toggleOpen} />
      <Drawer open={open} toggleOpen={toggleOpen} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
