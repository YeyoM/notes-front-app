import React, { useState } from 'react'

export default function Togglabel ({children, buttonLable}) {

  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : ''}
  const showWhenVisible = { display: visible ? '' : 'none'}

  const handleShow = () => {
    setVisible(true)
  }
  const handleHide = () => {
    setVisible(false)
  }

  return (
    <div>
      <div style={hideWhenVisible}> 
        <button onClick={handleShow}>{buttonLable}</button>
      </div>
      <div style={showWhenVisible}>
        {children}
      </div>
      <div style={showWhenVisible}>
        <button onClick={handleHide}>Cancel</button>
      </div>
    </div>
  )
}