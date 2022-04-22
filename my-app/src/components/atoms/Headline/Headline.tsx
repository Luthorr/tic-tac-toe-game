import { HeaderProps } from './Headline.types';
import styles from './Headline.module.scss';

import classnames from 'classnames';
import { CROSS, NOUGHT } from '../../../constants/Game.constants';
const Headline = ({ children, winner }: HeaderProps) => {
  return (
    <h3
      className={classnames(styles.headline, {
        [styles.cross]: winner === CROSS,
        [styles.nought]: winner === NOUGHT,
      })}
    >
      {children}
    </h3>
  );
};

export default Headline;
