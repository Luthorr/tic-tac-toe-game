import styles from './Game.module.scss';
import Tile from '../../atoms/Tile/Tile';

const Game = () => {
  return (
    <div className={styles.container}>
      <Tile name='cross' />
      <Tile name='nought' />
      <Tile name='cross' />
    </div>
  );
};

export default Game;
