import './App.css'


import { useState, useEffect } from "react";
import Description from './component/Description/Description';
import Options from './component/options/options';
import Feedback from './component/Feedback/feedback';

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
