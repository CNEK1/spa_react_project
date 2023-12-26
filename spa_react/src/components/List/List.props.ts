import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ListProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}