import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';
import classnames from 'classnames';
import {
  COLOR_AQUA,
  COLOR_GOLD,
  COLOR_PRIMARY_LIGHTER,
} from '../../organism/Game/Game.constants';

const Button = ({ children, btnColor, clickHandler }: ButtonProps) => {
  return (
    <button
      className={classnames(styles.button, {
        [styles.aqua]: btnColor === COLOR_AQUA,
        [styles.gold]: btnColor === COLOR_GOLD,
        [styles.primaryLighter]: btnColor === COLOR_PRIMARY_LIGHTER,
      })}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
