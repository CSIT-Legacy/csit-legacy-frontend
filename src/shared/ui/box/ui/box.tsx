'use client';

import { ReactNode } from 'react';
import styles from './box.module.scss';

export interface BoxProps {
	children?: ReactNode;
	variant?: 'default' | 'primary' | 'error' | 'success' | 'info' | 'warning';
	customClassName?: string;
	name?: string;
}

export function Box({ children, variant, customClassName, name }: BoxProps) {
	return (
		<div className={`${styles.box} ${styles[variant ?? 'default']} ${customClassName ?? ''}`}>
			{name && <label>{name}</label>}
			{children}
		</div>
	);
}
