import React from 'react'
import MyWorkPage from './MyWorkPage'
import './index.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactScreen from '../src/Screens/ReactScreen.js'
import HtmlScreen from './Screens/HtmlScreen.js'
import JavaScriptScreen from './Screens/JavaScriptScreen.js'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MyWorkPage />} />
          <Route path="/react" element={<ReactScreen />} />
          <Route path="/html" element={<HtmlScreen />} />
          <Route path="/javascript" element={<JavaScriptScreen />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
