import styles from "./Notification.module.css" 
import { useState } from 'react';
export default function Notification({ message }) {
  return <p className={styles.NotificationMessage}>{message}</p>;
}