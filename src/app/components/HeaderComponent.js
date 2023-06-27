import React from 'react';
import ReactDOM from 'react-dom/client';
import { mySvg } from './Constants';



export default function HeaderComponent({ onStartButtonClick, onEndButtonClick, onRemoveButtonClick }) {
  

    return (
        <header>
            <button id='Start' onClick={onStartButtonClick}>{mySvg.START_SVG}</button>
            <button id='End' onClick={onEndButtonClick}>{mySvg.END_SVG}</button>
            <button id='Play'>{mySvg.PLAY_SVG}</button>
            <select id='Type'>Algorithm Type
                
                <option value="Placeholder1">Djinkstri Algorithm</option>
                <option value="Placeholder1">Placeholder2</option>
            </select>
            <button id='Remove' onClick={onRemoveButtonClick}>{mySvg.REMOVE_SVG}</button>
        </header>
    )
}