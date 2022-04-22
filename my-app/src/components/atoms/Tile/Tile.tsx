import Icon from '../Icon/Icon';
import styles from './Tile.module.scss';
import { TileProps } from './TIle.types';

const Tile = ({ value, gameEnded, onTileClick }: TileProps) => {
  const handleClick = (): void => {
    !value && !gameEnded && onTileClick();
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <Icon name={value} />
    </div>
  );
};

export default Tile;
