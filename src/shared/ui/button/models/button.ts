import { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children?: ReactNode;
	disabled?: boolean;
	variant?: 'default' | 'primary' | 'error' | 'success' | 'info' | 'warning';
	size?: 'md' | 'sm' | 'lg' | 'icon';
};
