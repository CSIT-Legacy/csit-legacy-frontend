'use client';

import { Dispatch, InputHTMLAttributes, ReactNode, SetStateAction, useState } from 'react';
import styles from './input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	state: [string, Dispatch<SetStateAction<string>>];
	disabled?: boolean;
	variant?: 'default' | 'primary' | 'error' | 'success' | 'info' | 'warning';
	placeholder?: string;
	name: string;
}

export function Input({ state, disabled, variant, placeholder, name, ...props }: InputProps) {
	return (
		<input
			className={`
        ${styles.input}
        ${styles[variant ?? 'default']}
      `}
			disabled={disabled}
			value={state[0]}
			onChange={(e) => {
				state[1](() => e.target.value);
			}}
			placeholder={placeholder}
			{...props}
		/>
	);
}
