import styles from "./Options.module.css" 
import { useState } from 'react';
  
export default function Options({updateFeedback, resetFeedback, totalFeedback} ) {

    return (
        <div className={styles.optionsList}>
            <button onClick={() => updateFeedback("good")} className={styles.optionsItem}>good</button>
            <button onClick={() => updateFeedback("neutral")} className={styles.optionsItem}>neutral</button>
            <button onClick={() => updateFeedback("bad")} className={styles.optionsItem}>bad</button>
            {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={styles.optionsItem}>Reset</button>
      )}
        </div>
)
}