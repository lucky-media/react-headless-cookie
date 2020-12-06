# @lucky-media/react-headless-cookie

![OG](https://user-images.githubusercontent.com/11158157/101268468-70482b80-3763-11eb-8145-74eae4093374.jpg)

[![NPM](https://img.shields.io/npm/v/@lucky-media/react-headless-cookie.svg)](https://www.npmjs.com/package/@lucky-media/react-headless-cookie) ![Minified Size](https://img.shields.io/bundlephobia/min/@lucky-media/react-headless-cookie) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![license-mit](https://img.shields.io/badge/license-MIT-green)

This is a headless react cookie package, it comes unopinionated and unstyled. The main purpose we built this package is to allow us configurability while still maintain the Cookie set/hide logic.

The `<Cookie>` component accepts a `<Cookie.Button>` component which sets the cookie with the name on settings prop. See below for prop reference.

This package wraps the popular [js-cookie](https://github.com/js-cookie/js-cookie).

## Install

```bash
npm i @lucky-media/react-headless-cookie
```

## Usage

```jsx
import React from 'react'
import { Cookie } from '@lucky-media/react-headless-cookie'

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

## Props for Cookie component
| Prop              | Type   | Required | Description                                                                                                                |
|-------------------|--------|----------|----------------------------------------------------------------------------------------------------------------------------|
| children          | Node   |    yes   | Accepts React Component nodes / elements to render                                                                                    |
| style             | Object |    no    | Style object used for styling the main container of Cookie, has a default value for position, zIndex and display.          |
| className         | String |    no    | className string used for styling the main container of Cookie.                                                            |
| delay             | Number |    no    | Add a delay before showing the popup. Defaults to 2000ms.                                                                  |
| settings          | Object |    yes   | Cookie settings, accepts name (string) and duration (number). More settings can be added check the js-cookie documentation |
| settings.name     | String |    yes   | Cookie name                                                                                                                |
| settings.duration | Number |    no    | Cookie duration in days, defaults to 180.                                                                                  |

## Props for Cookie.Button
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| children | Node | yes | Accepts React Component / elements nodes to render |
| style | Object | no | style object used for styling the button |
| className | String | no | className string used for styling the button |
| as | String | no | Tag on how to render the button, defaults to `button` |

## Examples
Checkout these examples we built with Tailwind CSS on how to use the plugin
- [First Example](https://codesandbox.io/s/react-headless-cookie-example-1-22gx6?file=/src/App.js)

## License

MIT © [lucky-media](https://github.com/lucky-media)
