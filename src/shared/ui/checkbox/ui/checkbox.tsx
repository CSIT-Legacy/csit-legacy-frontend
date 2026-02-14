'use client';

import { InputHTMLAttributes } from 'react';
import styles from './checkbox.module.scss';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	checked?: boolean;
	label?: string;
	variant?: 'default' | 'primary' | 'error' | 'success' | 'info' | 'warning';
	customClassName?: string;
}

export function Checkbox({ checked, label, variant, customClassName, ...props }: CheckboxProps) {
	return (
		<label className={`${styles.label} ${styles[variant ?? 'default']}`}>
			<input
				className={`${styles.checkbox} ${styles[variant ?? 'default']} ${customClassName ?? ''}`}
				type='checkbox'
				checked={checked}
				{...props}
			/>
			{label}
		</label>
	);
}
