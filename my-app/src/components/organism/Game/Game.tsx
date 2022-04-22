import { useEffect, useRef, useState } from 'react';
import styles from './Game.module.scss';
import Tile from '../../atoms/Tile/Tile';
import TileRow from '../../molecules/TileRow/TileRow';
import Modal from '../Modal/Modal';
import InfoBar from '../../molecules/InfoBar/InfoBar';

import * as Constants from '../../../constants/Game.constants';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import { GameResultType, ScoreType } from './Game.types';
import Score from '../../molecules/Score/Score';
import Logo from '../../atoms/Logo/Logo';

const Game = () => {
  const [board, setBoard] = useState<string[]>(Constants.INITIAL_BOARD_STATE);
  const [currentPlayer, setCurrentPlayer] = useState<string>(
    Constants.INITIAL_CURRENT_PLAYER_STATE
  );
  const [gameResult, setGameResult] = useState<GameResultType>(
    Constants.INITIAL_GAME_RESULT_STATE
  );
  const [score, setScore] = useState<ScoreType>(Constants.INITIAL_SCORE_STATE);
  const [showModal, setShowModal] = useState<Boolean>(false);
  const initialRender = useRef(true);
  const [winningPattern, setWinningPattern] = useState<number[]>([]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const isWinner = checkWin();
    if (isWinner) {
      incrementScore(currentPlayer);
      setShowModal(true);
      setGameResult({ winner: currentPlayer, ended: true });
      return;
    }

    const isDraw = checkDraw();
    if (isDraw) {
      incrementScore(Constants.DRAW);
      setShowModal(true);
      setGameResult({ winner: Constants.DRAW, ended: true });
      return;
    }

    isGameRunning() && changeCurrentPlayer();
  }, [board]);

  const incrementScore = (key: string) => {
    setScore((prevState) => ({
      ...prevState,
      [key]: prevState[key as keyof ScoreType] + 1,
    }));
  };

  const checkWin = (): Boolean => {
    let matchingTiles: number = 0;
    for (let i = 0; i < Constants.WINNING_PATTERNS.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[Constants.WINNING_PATTERNS[i][j]] === currentPlayer) {
          matchingTiles++;
        }
      }
      if (matchingTiles >= 3) {
        setWinningPattern(Constants.WINNING_PATTERNS[i]);
        return true;
      }
      matchingTiles = 0;
    }
    return false;
  };

  const checkDraw = (): Boolean => {
    let clickedTilesCounter = 0;
    board.forEach(({ length }) => {
      length && clickedTilesCounter++;
    });
    return clickedTilesCounter === 9 ? true : false;
  };

  const changeCurrentPlayer = (): void => {
    setCurrentPlayer((prevMove) =>
      prevMove === Constants.CROSS ? Constants.NOUGHT : Constants.CROSS
    );
  };

  const handleTileClick = (tileId: number): void => {
    setBoard(board.map((item, ind) => (ind === tileId ? currentPlayer : item)));
  };

  const isGameRunning = () => {
    for (let i = 0; i < board.length; i++) {
      if (board[i].length) {
        return true;
      }
    }
    return false;
  };

  const changeShowModal = (): void => {
    setShowModal((prevState) => !prevState);
  };

  const resetGame = (): void => {
    setBoard(Constants.INITIAL_BOARD_STATE);
    setCurrentPlayer(Constants.INITIAL_CURRENT_PLAYER_STATE);
    setGameResult(Constants.INITIAL_GAME_RESULT_STATE);
    setWinningPattern([]);
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.infoRow}>
          <Logo />
          <>
            <Button
              btnColor={Constants.COLOR_PRIMARY_LIGHTER}
              clickHandler={() => {}}
              disabled
            >
              <Icon size={20} name={currentPlayer} /> TURN
            </Button>
          </>
          <>
            <Button clickHandler={resetGame}>
              <Icon size={20} name={Constants.REPEAT} />
            </Button>
          </>
        </div>
        <div className={styles.boardContainer}>
          <TileRow>
            <Tile
              value={board[0]}
              gameEnded={gameResult.ended}
              onTileClick={() => handleTileClick(0)}
              winningTile={winningPattern.includes(0)}
            />
            <Tile
              value={board[1]}
              gameEnded={gameResult.ended}
              onTileClick={() => handleTileClick(1)}
              winningTile={winningPattern.includes(1)}
            />
            <Tile
              value={board[2]}
              gameEnded={gameResult.ended}
              onTileClick={() => handleTileClick(2)}
              winningTile={winningPattern.includes(2)}
            />
          </TileRow>
          <TileRow>
            <Tile
              value={board[3]}
              gameEnded={gameResult.ended}
              onTileClick={() => handleTileClick(3)}
              winningTile={winningPattern.includes(3)}
            />
            <Tile
              value={board[4]}
              gameEnded={gameResult.ended}
              onTileClick={() => handleTileClick(4)}
              winningTile={winningPattern.includes(4)}
            />
            <Tile
              value={board[5]}
              gameEnded={gameResult.ended}
              onTileClick={() => handleTileClick(5)}
              winningTile={winningPattern.includes(5)}
            />
          </TileRow>
          <TileRow>
            <Tile
              value={board[6]}
              gameEnded={gameResult.ended}
              onTileClick={() => handleTileClick(6)}
              winningTile={winningPattern.includes(6)}
            />
            <Tile
              value={board[7]}
              gameEnded={gameResult.ended}
              onTileClick={() => handleTileClick(7)}
              winningTile={winningPattern.includes(7)}
            />
            <Tile
              value={board[8]}
              gameEnded={gameResult.ended}
              onTileClick={() => handleTileClick(8)}
              winningTile={winningPattern.includes(8)}
            />
          </TileRow>
        </div>
        <Score score={score} />
      </div>
      {showModal && (
        <Modal>
          <InfoBar
            winner={gameResult.winner}
            startNewRound={resetGame}
            changeShowModal={changeShowModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default Game;
