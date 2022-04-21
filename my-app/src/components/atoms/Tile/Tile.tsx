import Icon from '../Icon/Icon';
import styles from './Tile.module.scss';
import { TileProps } from './TIle.types';

const Tile = ({ name }: TileProps) => {
  return (
    <div className={styles.container}>
      <Icon name={name} />
    </div>
  );
};

export default Tile;
