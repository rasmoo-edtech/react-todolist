import { FaTrash } from 'react-icons/fa'

import styles from './index.module.css'

export function Task({ id, name, completed, onRemove }) {
  return (
    <li className={styles.task}>
      <input
        type="checkbox"
        checked={completed}
        className={styles.task__checkbox}
        onChange={e => console.log(e.target.value)}
      />

      <span className={styles.task__name}>
        {name}
      </span>

      <button
        type="button"
        className={styles.task__button}
        onClick={() => onRemove(id)}
      >
        <FaTrash size={12} />
      </button>
    </li>
  )
}