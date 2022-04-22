import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  disabled?: Boolean;
  btnColor?: string;
  clickHandler: () => void;
};
