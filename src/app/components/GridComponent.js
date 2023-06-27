import React, { useState } from 'react';
import { mySvg } from './Constants';

export default function GridComponent({ startButtonClicked, setStartButtonClicked, endButtonClicked, setEndButtonClicked, removeButtonClicked, setRemoveButtonClicked }) {
  // Form Rows and Columns
  const rows = Array.from({ length: 40 }, (_, index) => index);
  const columns = Array.from({ length: 80 }, (_, index) => index);

  // States
  const [startCell, setStartCell] = useState(null);
  const [endCell, setEndCell] = useState(null);
  const [removeCell, setRemoveCell] = useState(null);
  const [blockedCells, setBlockedCells] = useState([]);
  const [hoverBlocking, setHoverBlocking] = useState(false);

  // Handles
  const appendBlockedCell = (newCell) => {
    setBlockedCells((prevBlockedCells) => [...prevBlockedCells, newCell]);
  };

  const removeBlockedCell = (cellId) => {
    setBlockedCells((prevBlockedCells) => prevBlockedCells.filter((cell) => cell !== cellId));
  };

  const handleMouseEnter = (row, column) => {
    const cellId = `cell-${row}-${column}`;
    if (hoverBlocking) {
      appendBlockedCell(cellId);
    } else if (removeButtonClicked) {
      removeBlockedCell(cellId)
    }
  };

  const handleCellClick = (row, column) => {
    const cellId = `cell-${row}-${column}`;

    if (startButtonClicked) {
      if (cellId !== endCell) {
        setStartCell(cellId);
      }
      setStartButtonClicked(false);
    } else if (endButtonClicked) {
      if (cellId !== startCell) {
        setEndCell(cellId);
      }
      setEndButtonClicked(false);
    }  else {
      if (hoverBlocking) {
        appendBlockedCell(cellId);
        setHoverBlocking(false);
      } else {
        if (removeButtonClicked === false) {
          appendBlockedCell(cellId);
          setHoverBlocking(true);
        }
        
      }
    }
  };

  return (
    <main>
      <table>
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              {columns.map((column) => {
                const cellId = `cell-${row}-${column}`;
                const isStartCell = startCell === cellId;
                const isEndCell = endCell === cellId;
                const isRemoveCell = removeCell === cellId;

                let cellContent = null;
                let cellStyle = {};

                if (isStartCell) {
                  cellContent = mySvg.START_SVG;
                } else if (isEndCell) {
                  cellContent = mySvg.END_SVG;
                } else if (isRemoveCell) {
                  cellStyle = {};
                } else {
                  cellStyle = blockedCells.includes(cellId) ? { backgroundColor: '#34495e' } : {};
                }

                return (
                  <td
                    key={column}
                    id={cellId}
                    onClick={() => handleCellClick(row, column)}
                    onMouseEnter={() => handleMouseEnter(row, column)}
                    style={cellStyle}
                  >
                    {cellContent}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}