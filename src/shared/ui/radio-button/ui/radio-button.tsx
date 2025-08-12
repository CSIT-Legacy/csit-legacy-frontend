'use client';

import { InputHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import styles from './radio-button.module.scss';

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	onClick?: MouseEventHandler<HTMLInputElement>;
	children?: ReactNode;
	variant?: 'default' | 'primary' | 'error' | 'success' | 'info' | 'warning';
}

export function RadioButton({ onClick, children, variant, ...props }: RadioButtonProps) {
	return (
		<label
			htmlFor='radio-button'
			suppressHydrationWarning
			className={`${styles.label}
					${styles[variant ?? 'default']}
			`}>
			<input
				className={`
					${styles['radio-button']}
					${styles[variant ?? 'default']}
				`}
				type='radio'
				onClick={onClick}
				{...props}
			/>
			{children}
		</label>
	);
}
