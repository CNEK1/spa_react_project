import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface BodyProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
}
