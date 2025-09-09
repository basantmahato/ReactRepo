import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const ReactElement ={
//     type: 'a',
//     props:{
//         href: 'https://www.example.com',
//         target: '_blank'
//     },
//     children: 'Click here'
// }

// const anotherElement = (

//   <a href="https://www.example.com" target="_blank">visit example.com</a>

// )

// const ReactElement2 = React.createElement(
//   'a',
//   {
//     href: 'https://www.example.com',
//     target: '_blank'
//   },
//   'Click here'
// )

createRoot(document.getElementById('root')).render(
  <App/>
)
