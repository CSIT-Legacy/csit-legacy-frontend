'use client';

import { MouseEventHandler, ReactNode } from 'react';
import styles from './button.module.scss';

export type ButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children?: ReactNode;
	disabled?: boolean;
	variant?: 'default' | 'primary' | 'error' | 'success' | 'info' | 'warning';
	size?: 'md' | 'sm' | 'lg' | 'icon';
};

export function Button(props: ButtonProps) {
	return (
		<button
			className={`
        ${styles.button}
        ${styles[props.variant ?? 'default']}
        ${styles[props.size ?? 'md']}
      `}
			disabled={props.disabled}
			onClick={props.onClick ?? (() => {})}>
			{props.children}
		</button>
	);
}
