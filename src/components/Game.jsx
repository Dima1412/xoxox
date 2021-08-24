import React, {useState} from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';
import './Game.css';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return
        boardCopy[index] = xIsNext? 'X' : 'O'
        setXIsNext(!xIsNext)
        setBoard(boardCopy)
    }


    
    return (
        <div className="wrapper">
            <button className='ng_button' onClick={() => setBoard(Array(9).fill(null))}>Начать заново</button>
            <Board squares={board} onClick={handleClick} />
            <p className='game_info'>{winner ? 'Победитель: ' + winner : 'Сейчас ходит: ' + (xIsNext? 'X' : 'O')}</p>
        </div>
    );
}

export default Game;
