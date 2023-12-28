import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface CardButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    //appereance: 'primary' | 'ghost';
}
