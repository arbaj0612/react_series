import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp () {
  return (
    <div>
      <h1>Custom React Library</h1>
    </div>
  )
}

// const ReactElement = {
//   type: "a",
//   props : {
//       href: "https://google.com",
//       target : "_blank"
//   },
//   children: "Click to jump on google"
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const otherUsername = "_Arbaj"

const reactelement = React.createElement(
  "a",
  {href:"https://google.com", target:"_blamk"},
  "Click to visit Google!",
  otherUsername
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />
    // <MyApp/>
    // anotherElement
    reactelement
  
)
