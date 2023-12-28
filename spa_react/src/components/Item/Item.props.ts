import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface ItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    text: string;
    date: Date;
}
