import styles from './Modal.module.scss';
import { ModalProps } from './Modal.types';
import { motion } from 'framer-motion';

const Modal = ({ children }: ModalProps) => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ y: '-100px', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={styles.bar}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
