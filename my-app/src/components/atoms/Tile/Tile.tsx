import Icon from '../Icon/Icon';
import styles from './Tile.module.scss';
import { TileProps } from './TIle.types';

const Tile = ({ children }: TileProps) => {
  return (
    <div className={styles.container}>
      <Icon isCross={true} />
    </div>
  );
};

export default Tile;
