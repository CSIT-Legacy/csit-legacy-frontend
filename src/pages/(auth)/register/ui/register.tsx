'use client';

import { Box } from '@/shared/ui/box';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { useState } from 'react';
import styles from './register.module.scss';
import Link from 'next/link';

export function RegisterPage() {
	const username = useState<string>('');
	const email = useState<string>('');
	const password = useState<string>('');

	const [touchedEmail, setTouchedEmail] = useState<boolean>(false);
	const [touchedPassword, setTouchedPassowrd] = useState<boolean>(false);
	const [touchedUsername, setTouchedUsername] = useState<boolean>(false);

	const validateEmail = (emailText: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(emailText);
	};

	const validatePassword = (passwordText: string) => {
		return passwordText.length >= 12;
	};

	const validateUsername = (usernameText: string) => {
		return usernameText.length > 0;
	};

	const isValidEmail = validateEmail(email[0]);
	const isValidPassword = validatePassword(password[0]);
	const isValidUsername = validateUsername(username[0]);

	const showEmailError = touchedEmail && !isValidEmail;
	const showPasswordError = touchedPassword && !isValidPassword;
	const showUsernameError = touchedUsername && !isValidUsername;

	return (
		<div className={styles.container}>
			<form className={`${styles.register}`}>
				<h1>CSIT Legacy</h1>
				<Box
					variant='default'
					name='Регистрация'>
					<div>Имя:</div>
					<Input
						state={username}
						name='register-username'
						placeholder='Имя'
						onBlur={() => setTouchedUsername(true)}
						variant={showUsernameError ? 'error' : 'default'}
					/>
					<div>Почта:</div>
					<Input
						state={email}
						name='register-email'
						type='email'
						placeholder='Почта'
						onBlur={() => setTouchedEmail(true)}
						variant={showEmailError ? 'error' : 'default'}
					/>
					<div>Пароль:</div>
					<Input
						state={password}
						name='register-password'
						type='password'
						placeholder='Пароль'
						onBlur={() => setTouchedPassowrd(true)}
						variant={showPasswordError ? 'error' : 'default'}
					/>
					<Button
						customClassName={styles.button}
						variant='default'
						disabled={showEmailError || showPasswordError || showUsernameError}
						onClick={() => {
							console.log('click');
						}}>
						Зарегистрироваться
					</Button>
					<Link
						className={styles.link}
						href='/login'>
						Войти
					</Link>
				</Box>
			</form>
		</div>
	);
}
