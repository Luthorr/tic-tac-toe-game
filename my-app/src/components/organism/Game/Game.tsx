import styles from './Game.module.scss';
import Tile from '../../atoms/Tile/Tile';

const Game = () => {
  return (
    <div className={styles.container}>
      <Tile>X</Tile>
      <Tile>X</Tile>
      <Tile>X</Tile>
    </div>
  );
};

export default Game;
