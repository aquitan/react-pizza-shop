import { HTMLAttributes, ReactNode } from 'react';

export type HTagProps = HTMLAttributes<HTMLHeadingElement> & {
	tag: 'h1' | 'h2' | 'h3',
	children: ReactNode
}