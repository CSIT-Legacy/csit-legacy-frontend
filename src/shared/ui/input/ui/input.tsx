'use client';

import { InputHTMLAttributes } from 'react';
import styles from './input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	value: string;
	handleChange: (newValue: string) => void;
	disabled?: boolean;
	variant?: 'default' | 'primary' | 'error' | 'success' | 'info' | 'warning';
	placeholder?: string;
	name: string;
	customClassName?: string;
}

export function Input({
	value,
	handleChange,
	disabled,
	variant,
	placeholder,
	name,
	customClassName,
	...props
}: InputProps) {
	return (
		<input
			className={`${styles.input} ${styles[variant ?? 'default']} ${customClassName ?? ''}`}
			disabled={disabled}
			value={value}
			onChange={(e) => {
				handleChange(e.target.value);
			}}
			placeholder={placeholder}
			{...props}
		/>
	);
}
