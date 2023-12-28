import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface LeftPanelProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
}
