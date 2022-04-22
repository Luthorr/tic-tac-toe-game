import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  btnColor?: string;
  clickHandler: () => void;
};
