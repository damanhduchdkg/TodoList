import styles from './taskList.module.scss'

interface TaskListProps {
  doneTaskList?: boolean
}

export default function TaskList(props: TaskListProps) {
  const { doneTaskList } = props
  return (
    <div>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn Thành' : 'Chưa Hoàn Thành'}</h2>
      <div className={styles.tasks}>
        <div className={styles.taskItem}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={styles.taskName}>Học bài</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>🖌️</button>
            <button className={styles.taskBtn}>🗑️</button>
          </div>
        </div>
        <div className={styles.taskItem}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={`${styles.taskName} ${styles.taskNameDone}`}>Lập trình</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>🖌️</button>
            <button className={styles.taskBtn}>🗑️</button>
          </div>
        </div>
        <div className={styles.taskItem}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={styles.taskName}>Tiếng Anh</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>🖌️</button>
            <button className={styles.taskBtn}>🗑️</button>
          </div>
        </div>
      </div>
    </div>
  )
}
