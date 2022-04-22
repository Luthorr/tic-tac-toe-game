import styles from './Icon.module.scss';
import { IconTypes } from './Icon.types';

import classnames from 'classnames';
import { motion } from 'framer-motion';
import { CROSS, NOUGHT } from '../../../constants/Game.constants';

const Icon = ({ name, size = 70, winningIcon }: IconTypes) => {
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
          [styles.cross]: name === CROSS,
          [styles.nought]: name === NOUGHT,
          [styles.winningIcon]: winningIcon,
        })}
      />
    );
  }
  return <></>;
};

export default Icon;
