# react-headless-cookie

> This is a headless react cookie package, it comes unopinionated and unstyled

[![NPM](https://img.shields.io/npm/v/react-headless-cookie.svg)](https://www.npmjs.com/package/react-headless-cookie) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-headless-cookie
```

## Usage

```jsx
import React from 'react'
import { Cookie } from 'react-headless-cookie'

const styles = {
  width: '100%',
  backgroundColor: '#000',
  color: 'white',
  bottom: '0px',
  padding: '1rem'
}

const App = () => {
  return (
    <Cookie style={styles} settings={{ name: 'cookie' }}>
      <div>This website is using cookies</div>
      <Cookie.Button>Accept</Cookie.Button>
    </Cookie>
  )
}
```

## License

MIT © [lucky-media](https://github.com/lucky-media)
