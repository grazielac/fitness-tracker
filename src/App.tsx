
import { useState } from 'react'
import './App.css'
import DisplayWorkout from './components/DisplayWorkout'
import Workout from './components/Workout'

function App() {
  const [ refreshCounter, setRefreshCounter ] = useState(0);

  const update = () => {
    setRefreshCounter(prev => prev + 1)
  }

  return (
    <>
      <Workout updateForm={update}  />
      <DisplayWorkout refreshCounter={refreshCounter} />
    </>
  )
}

export default App
