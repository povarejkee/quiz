import React, { Fragment } from 'react'
import styles from './drawer.module.css'
import classnames from 'classnames'
import Overlay from './overlay'

const links = [1, 2, 3]

const Drawer = props => {
  const { open, toggleOpen } = props

  return (
    <Fragment>
      <nav
        className={classnames(styles.drawer, {
          [styles.open]: open,
        })}>
        <ul className={styles.list}>
          {links.map((link, index) => {
            return (
              <li key={index} className={styles.link}>
                <a href="#">Link {link}</a>
              </li>
            )
          })}
        </ul>
      </nav>
      {open && <Overlay onClose={toggleOpen} />}
    </Fragment>
  )
}

export default Drawer
