import React from 'react'

const AnswerItem = props => {
  const { item } = props

  return <li>{item.text}</li>
}

export default AnswerItem
