import React from 'react'

import { Cookie } from 'react-headless-cookie'

const Space = () => {
  return <div style={{ height: '12rem' }}></div>
}

const App = () => {
  return (
    <>
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Cookie settings={{ name: 'luckymedia' }}>
        <Cookie.Body>This website is using cookies</Cookie.Body>

        <Cookie.Button>Accept</Cookie.Button>
      </Cookie>
    </>
  )
}

export default App
