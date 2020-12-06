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
      <Cookie
        style={{
          width: '100%',
          backgroundColor: '#000',
          color: 'white',
          bottom: '0px',
          padding: '1rem'
        }}
        settings={{ name: 'luckymedia' }}
      >
        <div>This website is using cookies</div>
        <Cookie.Button>Accept</Cookie.Button>
      </Cookie>
    </>
  )
}

export default App
