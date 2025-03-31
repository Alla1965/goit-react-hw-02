import styles from "./Feedback.module.css" 
export default function Feedback({ reviewsData, totalFeedback, positiveFeedback }) {
    return (
        <div className={styles.feedbackList}>
            <p className={styles.feedbackItem}>good:   {reviewsData.good}</p>
            <p className={styles.feedbackItem}>neutral:  {reviewsData.neutral}</p>
            <p className={styles.feedbackItem}>bad:  {reviewsData.bad}</p>
            <p className={styles.feedbackItem}>Positive feedback: {positiveFeedback}%</p>
        </div>
                
         )
};