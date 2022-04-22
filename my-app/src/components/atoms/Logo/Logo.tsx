import styles from './Logo.module.scss';
import Icon from '../Icon/Icon';
import { CROSS, NOUGHT } from '../../../constants/Game.constants';
const Logo = () => {
  return (
    <div className={styles.iconsContainer}>
      <Icon size={20} name={CROSS} />
      <Icon size={20} name={NOUGHT} />
    </div>
  );
};

export default Logo;
