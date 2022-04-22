import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';
import classnames from 'classnames';
import {
  COLOR_AQUA,
  COLOR_GOLD,
  COLOR_PRIMARY_LIGHTER,
} from '../../../constants/Game.constants';

const Button = ({
  children,
  btnColor,
  disabled,
  clickHandler,
}: ButtonProps) => {
  return (
    <button
      className={classnames(styles.button, {
        [styles.aqua]: btnColor === COLOR_AQUA,
        [styles.gold]: btnColor === COLOR_GOLD,
        [styles.primaryLighter]: btnColor === COLOR_PRIMARY_LIGHTER,
        [styles.disabled]: disabled,
      })}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
