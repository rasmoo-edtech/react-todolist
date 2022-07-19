import { v4 as uuid } from 'uuid'
import { useState } from "react"
import { FaPlus } from 'react-icons/fa'

import { Tasks } from './components/Tasks'

import styles from './styles/app.module.css'

export function App() {
  const [tasks, setTasks] = useState([
    { id: uuid(), name: 'Estudar react', completed: false },
    { id: uuid(), name: 'Lavar o carro', completed: true },
    { id: uuid(), name: 'Aprender componentização', completed: false },
  ])

  const [taskName, setTaskName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(!!taskName) {
      const newTask = {
        id: uuid(),
        name: taskName,
        completed: false,
      }

      setTasks(currentState => [...currentState, newTask])
      setTaskName('')
    }
  }

  const onRemoveTask = (taskId) => {
    setTasks(currentState => currentState.filter(task => task.id !== taskId))
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>todo list</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskName}
            placeholder="Nome da tarefa"
            onChange={event => setTaskName(event.target.value)}
          />
          
          <button type="submit" disabled={taskName === ''}>
            <FaPlus size={12} />
            Adicionar
          </button>
        </form>

        <Tasks tasks={tasks} onRemoveTask={onRemoveTask} />
      </div>

    </div>
  )
}