import { TileRowProps } from './TileRow.types';
import styles from './TileRow.module.scss';

const TileRow = ({ children }: TileRowProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default TileRow;
