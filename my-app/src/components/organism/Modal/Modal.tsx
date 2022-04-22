import styles from './Modal.module.scss';
import { ModalProps } from './Modal.types';

const Modal = ({ children }: ModalProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Modal;
