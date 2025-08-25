'use client';

import { Box } from '@/shared/ui/box';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { useState } from 'react';
import styles from './login.module.scss';
import Link from 'next/link';

export function LoginPage() {
	const email = useState<string>('');
	const password = useState<string>('');

	const [touchedEmail, setTouchedEmail] = useState<boolean>(false);

	const validateEmail = (emailText: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(emailText);
	};

	const isValidEmail = validateEmail(email[0]);

	const showError = touchedEmail && !isValidEmail;

	return (
		<div className={styles.container}>
			<form className={`${styles['login']}`}>
				<h1>CSIT Legacy</h1>
				<Box
					variant='default'
					name='Войти'>
					Почта:
					<Input
						state={email}
						name='login-email'
						type='email'
						placeholder='Почта'
						onBlur={() => setTouchedEmail(true)}
						variant={showError ? 'error' : 'default'}
					/>
					Пароль:
					<Input
						state={password}
						name='login-password'
						type='password'
						placeholder='Пароль'
						variant='default'
					/>
					<Button
						customClassName={styles.button}
						variant='default'
						onClick={() => {
							console.log('click');
						}}>
						Вход
					</Button>
					<Link
						className={styles.link}
						href='/'>
						Зарегистрироваться
					</Link>
				</Box>
			</form>
		</div>
	);
}
