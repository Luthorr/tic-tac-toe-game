import styles from './Icon.module.scss';
import { IconTypes } from './Icon.types';

import classnames from 'classnames';
import { motion } from 'framer-motion';
import * as Constants from '../../../constants/Game';

const Icon = ({ name }: IconTypes) => {
  if (name) {
    const icon = require(`../../../assets/icons/${name}.svg`);
    return (
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        src={icon}
        height={70}
        alt='icon'
        className={classnames({
          [styles.cross]: name === Constants.CROSS,
          [styles.nought]: name === Constants.NOUGHT,
        })}
      />
    );
  }
  return <></>;
};

export default Icon;
