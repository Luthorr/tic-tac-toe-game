import Icon from '../Icon/Icon';
import styles from './Tile.module.scss';
import { TileProps } from './TIle.types';

const Tile = ({ value, onTileClick }: TileProps) => {
  const handleClick = (): void => {
    !value && onTileClick();
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <Icon name={value} />
    </div>
  );
};

export default Tile;
