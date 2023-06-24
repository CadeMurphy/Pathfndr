import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



export default function Grid() {

    const numOfRows = []
    for (let j = 0; j <= 25; j++) {
        numOfRows.push(j)
    }

    for(let u = 0; u <= 0; u++) {
        
    }

    const row1 = []
    for (let i = 0; i <= 62; i++) {
        row1.push(i)
    }

    return (
        <main>
            <table>
            <tbody>
                <tr>
                {
                    row1.map((rows, index) => {
                        return(
                        <td id={index}></td>
                        )
                    })
                }
                </tr>
            </tbody>
            </table>
        </main>
        
    )
}