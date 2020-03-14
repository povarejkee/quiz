import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './drawer.module.css'
import classnames from 'classnames'
import Overlay from './overlay'

const links = [
  { title: 'Авторизация', to: '/auth', exact: false },
  { title: 'Список тестов', to: '/', exact: true },
  { title: 'Создать тест', to: '/quiz-creation', exact: false },
]

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
                <NavLink
                  to={link.to}
                  exact={link.exact}
                  activeClassName={styles.active}
                  onClick={() => toggleOpen(false)}>
                  {link.title}
                </NavLink>
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
