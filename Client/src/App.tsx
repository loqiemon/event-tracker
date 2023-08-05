

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import CreatePage from './pages/CreatePage/CreatePage'
import MainPage from './pages/MainPage/MainPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/s' element={<CreatePage/>}/>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
