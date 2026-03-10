import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/global/Header'
import TodoManager from './components/pages/To-DoManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
        <Routes>
          <Route path='/todolist' element={<TodoManager />}></Route>
        </Routes>
    </>
  )
}

export default App;
