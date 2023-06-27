import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent';
import GridComponent from './components/GridComponent'
import { useState } from 'react';

export default function App() {
  //States
  const [startButtonClicked, setStartButtonClicked] = useState(false);
  const [endButtonClicked, setEndButtonClicked] = useState(false);
  const [removeButtonClicked, setRemoveButtonClicked] = useState(false)

  //Handles
  const handleStartButtonClick = () => {
    setStartButtonClicked(true)
  };

  const handleEndButtonClick = () => {
    setEndButtonClicked(true)
  }

  const handleRemoveButtonClicked = () => {
    if (removeButtonClicked === false) {
      setRemoveButtonClicked(true)
    } else {
      setRemoveButtonClicked(false)
    }
    
    
  }



    return (
        <div>
        <HeaderComponent onStartButtonClick={handleStartButtonClick} onEndButtonClick={handleEndButtonClick} onRemoveButtonClick={handleRemoveButtonClicked}/>
        <GridComponent  startButtonClicked={startButtonClicked} setStartButtonClicked={setStartButtonClicked}
                        endButtonClicked={endButtonClicked} setEndButtonClicked={setEndButtonClicked}
                        removeButtonClicked={removeButtonClicked} setRemoveButtonClicked={setRemoveButtonClicked}/>
      </div>
    )
}