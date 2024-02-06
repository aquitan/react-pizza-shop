import { InputHTMLAttributes } from 'react';

export type SearchProps = InputHTMLAttributes<HTMLInputElement> & {
	placeholder: string
}