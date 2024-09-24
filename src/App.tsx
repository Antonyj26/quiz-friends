import { useState } from 'react'
import './App.css'
import { Buttons } from './Button/ButtonComponent'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      {currentPage === 'home' && (
        <div className="p1">
          <h1>Ola mundo</h1>
          <Buttons setPage={setCurrentPage} />
        </div>
      )}

      {currentPage === 'quiz' && (
        <div className="p2">
          <h1>Quiz</h1>
          <Buttons setPage={setCurrentPage} />

          <div className="inp">
            <input />
          </div>
        </div>
      )}
    </>
  )
}

export default App
