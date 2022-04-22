import Headline from '../../atoms/Headline/Headline';
import Icon from '../../atoms/Icon/Icon';
import styles from './InfoBar.module.scss';
import { InfoBarProps } from './InfoBar.types';

const InfoBar = ({ winner }: InfoBarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Icon name={winner} />{' '}
        <Headline winner={winner}>TAKES THE ROUND!</Headline>
      </div>
      <div className={styles.row}>
        <button>QUIT</button>
        <button>NEXT ROUND</button>
      </div>
    </div>
  );
};

export default InfoBar;
