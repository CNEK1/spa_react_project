import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface AddButonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
     children: ReactNode;
  //appereance: 'primary' | 'ghost';
}