import { useState } from 'react';
import styles from './Game.module.scss';
import Tile from '../../atoms/Tile/Tile';
import TileRow from '../../molecules/TileRow/TileRow';
import * as Constants from '../../../constants/Game';

const Game = () => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [currentMove, setCurrentMove] = useState(Constants.CROSS);

  const changeCurrentMove = (): void => {
    currentMove === Constants.CROSS
      ? setCurrentMove(Constants.NOUGHT)
      : setCurrentMove(Constants.CROSS);
  };

  const handleBoardChange = (tileId: number): void => {
    const boardCopy = [...board];
    boardCopy[tileId] = currentMove;
    changeCurrentMove();
    setBoard(boardCopy);
  };

  return (
    <div className={styles.container}>
      <TileRow>
        <Tile value={board[0]} onTileClick={() => handleBoardChange(0)} />
        <Tile value={board[1]} onTileClick={() => handleBoardChange(1)} />
        <Tile value={board[2]} onTileClick={() => handleBoardChange(2)} />
      </TileRow>
      <TileRow>
        <Tile value={board[3]} onTileClick={() => handleBoardChange(3)} />
        <Tile value={board[4]} onTileClick={() => handleBoardChange(4)} />
        <Tile value={board[5]} onTileClick={() => handleBoardChange(5)} />
      </TileRow>
      <TileRow>
        <Tile value={board[6]} onTileClick={() => handleBoardChange(6)} />
        <Tile value={board[7]} onTileClick={() => handleBoardChange(7)} />
        <Tile value={board[8]} onTileClick={() => handleBoardChange(8)} />
      </TileRow>
    </div>
  );
};

export default Game;
