import React from 'react';
import './Board.css';
import Square from './Square';


const Board = ({squares, onClick}) => {
    return (
        <div className="board">
            {
                squares.map((sq, i) => <Square value={sq} key={i} onClick={() => {onClick(i)}}/>)
            }
        </div>
    );
}

export default Board;
