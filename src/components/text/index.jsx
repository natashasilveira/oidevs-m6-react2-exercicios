// import styles from './text.module.css';
import { styles } from './styles'


export const Text = (props) => {
  return (
    <div style={styles.title}>
      {props.children}
    </div>
  )
} 