import styles from './Icon.module.scss';
import { IconTypes } from './Icon.types';

import classnames from 'classnames';

const Icon = ({ name }: IconTypes) => {
  const icon = require(`../../../assets/icons/${name}.svg`);
  return (
    <img
      src={icon}
      height={70}
      alt='icon'
      className={classnames({
        [styles.cross]: name === 'cross',
        [styles.nought]: name === 'nought',
      })}
    />
  );
};

export default Icon;
