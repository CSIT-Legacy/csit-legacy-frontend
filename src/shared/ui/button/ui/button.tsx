'use client';

import { ButtonProps } from '../models/button';
import styles from './button.module.scss';

export function Button(props: ButtonProps) {
	return (
		<button
			className={`
        ${styles.button}
        ${styles[props.variant!] ?? styles.default}
        ${
					props.size === 'sm'
						? styles.sm
						: props.size === 'lg'
							? styles.lg
							: props.size === 'icon'
								? styles.icon
								: styles.md
				}
      `}
			disabled={props.disabled}
			onClick={props.onClick ?? (() => {})}>
			{props.children}
		</button>
	);
}
