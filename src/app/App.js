import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent';
import GridComponent from './components/GridComponent'

export default function App() {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <GridComponent></GridComponent>
        </div>
    )
}