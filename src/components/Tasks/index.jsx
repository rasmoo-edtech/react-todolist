import { Task } from '../Task'
import styles from './index.module.css'

export function Tasks({ tasks, onRemoveTask }) {
  return (
    <ul className={styles.tasks}>
      {tasks.map(task => (
        <Task
          {...task}
          key={task.id}
          onRemove={onRemoveTask}
        />
      ))}
    </ul>
  )
}