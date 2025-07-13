export default function HabitItem({ id, title, isComplete, toggleComplete, removeHabit}) {
    return (
        <li
           className={isComplete ? 'done' : ''}
           >
                <input 
                  id={id}
                  type="checkbox"
                  onChange={() => toggleComplete(id)} 
                  checked={isComplete}
                />
                <label htmlFor={id}>{title}</label> 
                <button onClick={() => removeHabit(id)}>❌</button> 
            </li>
    )
}