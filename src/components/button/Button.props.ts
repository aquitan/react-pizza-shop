import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode,
	appearance?: 'small' | 'round' | 'exit',
}