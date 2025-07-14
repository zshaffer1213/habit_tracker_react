import { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import "./index.css"
import HabitItem from "./HabitItem";

export default function App() {

  const [habits, setHabits] = useState([])
  const [newHabitName, setNewHabitName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!newHabitName.trim()) return
    setHabits(prevHabits => ([
      ...prevHabits, 
      {
        title:newHabitName,
        id: uuidv4(),
        isComplete: false
      }
    ]))
    setNewHabitName('')
  }

  function toggleComplete(id) {
    setHabits(habits.map(prevHabit => {
      if (prevHabit.id === id) {
        return ({
          ...prevHabit,
          isComplete: !prevHabit.isComplete
        })
      } else {
        return prevHabit
      }
    }))
  }

  function resetAll(toValue = false) {
    setHabits(habits.map(prevHabit => ({
      ...prevHabit,
      isComplete: toValue
    })))
  }

  function removeHabit(id) {
    setHabits(habits.filter(habit => habit.id !== id))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        
        <input type="text" onChange={(e) => setNewHabitName(e.target.value)} value={newHabitName} />
        <button type="submit" >Add Habit</button>
        
      </form>  
        <br />
        <ul>
          {habits.length > 0 && habits.map(habit => 
            <HabitItem 
              key={habit.id}
              id={habit.id}
              title={habit.title}
              isComplete={habit.isComplete}
              toggleComplete={toggleComplete}
              removeHabit={removeHabit}
            />
          )}
        </ul>
        {habits.length > 1 && <button onClick={() => resetAll(false)}>Reset All</button>}
    </>
  )

}