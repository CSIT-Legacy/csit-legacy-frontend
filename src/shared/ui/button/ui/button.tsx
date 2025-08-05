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

export function Button(props: ButtonProps) {
	return (
		<button
			className={`
        ${styles.button}
        ${styles[props.variant ?? 'default']}
        ${styles[props.size ?? 'md']}
      `}
			disabled={props.disabled}
			onClick={props.onClick ?? (() => {})}
			{...props}>
			{props.children}
		</button>
	);
}
