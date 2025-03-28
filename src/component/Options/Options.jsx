import styles from "./Options.module.css" 
export default function Options() {
    return (
        <div className={styles.optionsList}>
            <button className={styles.optionsItem}>good</button>
            <button className={styles.optionsItem}>neutral</button>
             <button className={styles.optionsItem}>bad</button>
        </div>
)
}