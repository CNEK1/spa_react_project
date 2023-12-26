import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode,
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  //appereance: 'primary' | 'ghost';
}