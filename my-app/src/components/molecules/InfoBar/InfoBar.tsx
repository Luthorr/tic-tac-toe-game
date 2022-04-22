import Button from '../../atoms/Button/Button';
import Headline from '../../atoms/Headline/Headline';
import Icon from '../../atoms/Icon/Icon';
import styles from './InfoBar.module.scss';
import { InfoBarProps } from './InfoBar.types';
import { motion } from 'framer-motion';

import { COLOR_GOLD, DRAW } from '../../../constants/Game.constants';

const InfoBar = ({ winner, changeShowModal, startNewRound }: InfoBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1 } }}
    >
      <div className={styles.row}>
        {winner === DRAW ? (
          <Headline winner={winner}>WE HAVE A DRAW!</Headline>
        ) : (
          <>
            <Icon name={winner} />
            <Headline winner={winner}>TAKES THE ROUND!</Headline>
          </>
        )}
      </div>
      <div className={styles.row}>
        <Button clickHandler={changeShowModal}>QUIT</Button>
        <Button btnColor={COLOR_GOLD} clickHandler={startNewRound}>
          NEXT ROUND
        </Button>
      </div>
    </motion.div>
  );
};

export default InfoBar;
