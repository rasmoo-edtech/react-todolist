import styles from './index.module.css'

export function Input(props) {
  return <input className={styles.input} {...props} />
}