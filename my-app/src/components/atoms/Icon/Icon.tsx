import styles from './Icon.module.scss';
import { IconTypes } from './Icon.types';

import classnames from 'classnames';
import { motion } from 'framer-motion';
import * as Constants from '../../organism/Game/Game.constants';

const Icon = ({ name, size = 70 }: IconTypes) => {
  if (name) {
    const icon = require(`../../../assets/icons/${name}.svg`);
    return (
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        src={icon}
        alt='icon'
        height={size}
        className={classnames(styles.icon, {
          [styles.cross]: name === Constants.CROSS,
          [styles.nought]: name === Constants.NOUGHT,
        })}
      />
    );
  }
  return <></>;
};

export default Icon;
