import { useState } from 'react';


const initialBoard = () => Array(9).fill(null);

const use =() => {
    const [board, setboard] = useState(initialBoard());
    const[isXNext, setisXNext] = useState(true);

    const winning_patterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
    ]

    const calculateWinner = (currentBoard) => {
        for (let i=0;i<winning_patterns.length; i++) {
        const [a,b,c] = winning_patterns[i]
        if(currentBoard[a] && currentBoard[a]==currentBoard[b] && currentBoard[a]==currentBoard[c]){

        return currentBoard[a];
        }
        }
        return null;
    };


    const handleClick = (index) => {
        // check the winner

        const winner = calculateWinner(board)
        if(winner || board[index]) return

        const newBoard = [...board]
        newBoard[index] = isXNext ? "X" : "O"
        setboard(newBoard);
        setisXNext(!isXNext);
    };

    const getStatusMessage = () => {

        const winner = calculateWinner(board)
        if(winner) return `player ${winner} wins` 
        if(!board.includes(null)) return `it is a draw`;
        return `player ${isXNext ? "X" : "O"} turn`;
    };

    const resetGame = () => { 

        setboard(initialBoard())
        setisXNext(true);
    };

    return {board, handleClick, calculateWinner, getStatusMessage, resetGame}
};

export default use;