import { useEffect, useRef, useState } from 'react';
import styles from './Game.module.scss';
import Tile from '../../atoms/Tile/Tile';
import TileRow from '../../molecules/TileRow/TileRow';
import Modal from '../Modal/Modal';
import InfoBar from '../../molecules/InfoBar/InfoBar';

import * as Constants from './Game.constants';
import Button from '../../atoms/Button/Button';

const Game = () => {
  const [board, setBoard] = useState<string[]>(Constants.INITIAL_BOARD_STATE);
  const [currentPlayer, setCurrentPlayer] = useState<string>(
    Constants.INITIAL_CURRENT_PLAYER_STATE
  );
  const [gameEnded, setGameEnded] = useState(Constants.INITIAL_GAME_STATE);
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    const isWinner = checkWin();
    if (isWinner) {
      setGameEnded(true);
      return;
    }
    changeCurrentPlayer();
  }, [board]);

  const checkWin = (): Boolean => {
    let matchingTiles: number = 0;
    for (let i = 0; i < Constants.WINNING_PATTERNS.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[Constants.WINNING_PATTERNS[i][j]] === currentPlayer) {
          matchingTiles++;
        }
      }
      if (matchingTiles >= 3) {
        return true;
      }
      matchingTiles = 0;
    }
    return false;
  };

  const changeCurrentPlayer = (): void => {
    console.log('change player');
    setCurrentPlayer((prevMove) =>
      prevMove === Constants.CROSS ? Constants.NOUGHT : Constants.CROSS
    );
  };

  const handleTileClick = (tileId: number): void => {
    setBoard(board.map((item, ind) => (ind === tileId ? currentPlayer : item)));
  };

  const resetGame = (): void => {
    initialRender.current = true;
    setBoard(Constants.INITIAL_BOARD_STATE);
    setCurrentPlayer(Constants.INITIAL_CURRENT_PLAYER_STATE);
    setGameEnded(Constants.INITIAL_GAME_STATE);
  };

  return (
    <div className={styles.container}>
      <Button clickHandler={resetGame}>RESET</Button>
      <Button btnColor={Constants.COLOR_AQUA} clickHandler={resetGame}>
        RESET
      </Button>
      <TileRow>
        <Tile
          value={board[0]}
          gameEnded={gameEnded}
          onTileClick={() => handleTileClick(0)}
        />
        <Tile
          value={board[1]}
          gameEnded={gameEnded}
          onTileClick={() => handleTileClick(1)}
        />
        <Tile
          value={board[2]}
          gameEnded={gameEnded}
          onTileClick={() => handleTileClick(2)}
        />
      </TileRow>
      <TileRow>
        <Tile
          value={board[3]}
          gameEnded={gameEnded}
          onTileClick={() => handleTileClick(3)}
        />
        <Tile
          value={board[4]}
          gameEnded={gameEnded}
          onTileClick={() => handleTileClick(4)}
        />
        <Tile
          value={board[5]}
          gameEnded={gameEnded}
          onTileClick={() => handleTileClick(5)}
        />
      </TileRow>
      <TileRow>
        <Tile
          value={board[6]}
          gameEnded={gameEnded}
          onTileClick={() => handleTileClick(6)}
        />
        <Tile
          value={board[7]}
          gameEnded={gameEnded}
          onTileClick={() => handleTileClick(7)}
        />
        <Tile
          value={board[8]}
          gameEnded={gameEnded}
          onTileClick={() => handleTileClick(8)}
        />
      </TileRow>
      {gameEnded && (
        <Modal>
          <InfoBar winner={currentPlayer} />
        </Modal>
      )}
    </div>
  );
};

export default Game;
