import styles from './ScoreTile.module.scss';
import { ScoreTileProps } from './ScoreTile.types';
import classnames from 'classnames';
import {
  COLOR_AQUA,
  COLOR_GOLD,
  COLOR_GRAY,
} from '../../organism/Game/Game.constants';
const ScoreTile = ({ children, tileColor }: ScoreTileProps) => {
  return (
    <div
      className={classnames(styles.scoreTile, {
        [styles.aqua]: tileColor === COLOR_AQUA,
        [styles.gold]: tileColor === COLOR_GOLD,
        [styles.gray]: tileColor === COLOR_GRAY,
      })}
    >
      {children}
    </div>
  );
};

export default ScoreTile;
