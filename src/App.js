import React from 'react'
import {Route,Routes} from 'react-router'
import Home from './components/Home'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
      </Routes>

    </div>
  )
}

export default App