import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import Memory from '../../types/global';

export interface ListProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    data: Memory[];
}
