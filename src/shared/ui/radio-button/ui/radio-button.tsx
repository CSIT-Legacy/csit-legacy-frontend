'use client';

import { InputHTMLAttributes } from 'react';
import styles from './radio-button.module.scss';

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	checked?: boolean;
	label?: string;
	variant?: 'default' | 'primary' | 'error' | 'success' | 'info' | 'warning';
}

export function RadioButton({ checked, label, variant, ...props }: RadioButtonProps) {
	return (
		<label className={`${styles.label} ${styles[variant ?? 'default']}`}>
			<input
				className={`${styles['radio-button']} ${styles[variant ?? 'default']}`}
				type='radio'
				checked={checked}
				{...props}
			/>
			{label}
		</label>
	);
}
