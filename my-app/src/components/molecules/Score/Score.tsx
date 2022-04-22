import ScoreTile from '../../atoms/ScoreTile/ScoreTile';
import styles from './Score.module.scss';
import * as Constants from '../../../constants/Game.constants';
import { ScoreProps } from './Score.types';

const Score = ({ score }: ScoreProps) => {
  return (
    <div className={styles.container}>
      <>
        <ScoreTile tileColor={Constants.COLOR_AQUA}>
          X WINS <br /> {score.cross}
        </ScoreTile>
      </>
      <>
        <ScoreTile tileColor={Constants.COLOR_GRAY}>
          TIES <br /> {score.draw}
        </ScoreTile>
      </>
      <>
        <ScoreTile tileColor={Constants.COLOR_GOLD}>
          O WINS <br /> {score.nought}
        </ScoreTile>
      </>
    </div>
  );
};

export default Score;
