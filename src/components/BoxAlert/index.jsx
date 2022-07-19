import { FaInfoCircle } from "react-icons/fa";

import styles from './index.module.css'

export function BoxAlert({ type }) {
  return (
    <div className={`${styles.boxAlert} ${styles[type]}`}>
      {type === 'empty' && (
        <>
          <FaInfoCircle size={36} />
          <p>A lista de tarefas está vazia.</p>
        </>
      )}

      {type === 'warning' && (
        <>
          <FaInfoCircle size={36} />
          <p>
            Não foi possível localizar nenhuma tarefa,
            tente novamente com outro termo.
          </p>
        </>
      )}
    </div>
  )
}