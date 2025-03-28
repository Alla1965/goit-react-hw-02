import './App.css'


import { useState, useEffect } from "react";
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

const reviewsData ={
	good: 0,
	neutral: 0,
	bad: 0
}



const App = () => {

  return (
    <>
      <Description />
      <Options />
      <Feedback reviewsData={reviewsData}/>
    </>
  );
}

export default App
