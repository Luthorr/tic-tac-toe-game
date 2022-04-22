import styles from './Logo.module.scss';
import Icon from '../Icon/Icon';
import * as Constants from '../../organism/Game/Game.constants';
const Logo = () => {
  return (
    <div className={styles.iconsContainer}>
      <Icon size={20} name={Constants.CROSS} />
      <Icon size={20} name={Constants.NOUGHT} />
    </div>
  );
};

export default Logo;
