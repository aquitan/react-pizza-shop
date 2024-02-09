import { HTMLAttributes, ReactNode } from 'react';

export type HeaderProps = HTMLAttributes<HTMLHeadingElement> & {
	children: ReactNode
}