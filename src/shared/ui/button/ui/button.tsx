'use client';

import { ButtonProps } from '../models/button';
import styles from './button.module.scss';

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
