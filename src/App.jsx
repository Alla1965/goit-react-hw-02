import './App.css'


import { useState, useEffect } from "react";
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification ';

const FEEDBACK_STORAGE_KEY = "feedbackData";

const reviewsData ={
	good: 0,
	neutral: 0,
	bad: 0
}

const App = () => {
const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem(FEEDBACK_STORAGE_KEY);
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    
    setFeedback((prevFeedback) => ({
      
      ...prevFeedback, 
      
    [feedbackType]: prevFeedback[feedbackType] + 1 
    }));
  };
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  console.log(totalFeedback);
   const positiveFeedback = totalFeedback > 0 
    ? Math.round((feedback.good / totalFeedback) * 100) 
    : 0;
   useEffect(() => {
    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);
  return (
    <>
      <Description />
      
      <Options
        updateFeedback={updateFeedback}
         resetFeedback={resetFeedback} 
        totalFeedback={totalFeedback}
      />
      
      {totalFeedback > 0 ? (
        <Feedback
          reviewsData={feedback} 
            totalFeedback={totalFeedback} 
            positiveFeedback={positiveFeedback}  />
      ) : (
        <Notification message="No feedback given yet" />
      )}
        </>
  );
}

export default App
