'use client';

import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import styles from './button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children?: ReactNode;
	disabled?: boolean;
	variant?: 'default' | 'primary' | 'error' | 'success' | 'info' | 'warning';
	size?: 'md' | 'sm' | 'lg' | 'icon';
}

export function Button({ onClick, children, disabled, variant, size, ...props }: ButtonProps) {
	return (
		<button
			className={`
        ${styles.button}
        ${styles[variant ?? 'default']}
        ${styles[size ?? 'md']}
      `}
			disabled={disabled}
			onClick={onClick ?? (() => {})}
			{...props}>
			{children}
		</button>
	);
}
