import { HTMLAttributes, ReactNode } from 'react';

export type FormProps = HTMLAttributes<HTMLFormElement> & {
	children: ReactNode,
}