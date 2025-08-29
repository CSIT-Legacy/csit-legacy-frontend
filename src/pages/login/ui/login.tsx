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
	const [touchedPassword, setTouchedPassowrd] = useState<boolean>(false);

	const validateEmail = (emailText: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(emailText);
	};

	const validatePassword = (passwordText: string) => {
		return passwordText.length >= 12;
	};

	const isValidEmail = validateEmail(email[0]);
	const isValidPassword = validatePassword(password[0]);

	const showEmailError = touchedEmail && !isValidEmail;
	const showPasswordError = touchedPassword && !isValidPassword;

	return (
		<div className={styles.container}>
			<form className={`${styles.login}`}>
				<h1>CSIT Legacy</h1>
				<Box
					variant='default'
					name='Вход'>
					<div>Почта:</div>
					<Input
						state={email}
						name='login-email'
						type='email'
						placeholder='Почта'
						onBlur={() => setTouchedEmail(true)}
						variant={showEmailError ? 'error' : 'default'}
					/>
					<div>Пароль:</div>
					<Input
						state={password}
						name='login-password'
						type='password'
						placeholder='Пароль'
						onBlur={() => setTouchedPassowrd(true)}
						variant={showPasswordError ? 'error' : 'default'}
					/>
					<Button
						customClassName={styles.button}
						variant='default'
						disabled={showEmailError || showPasswordError}
						onClick={() => {
							console.log('click');
						}}>
						Войти
					</Button>
					<Link
						className={styles.link}
						href='/register'>
						Зарегистрироваться
					</Link>
				</Box>
			</form>
		</div>
	);
}
