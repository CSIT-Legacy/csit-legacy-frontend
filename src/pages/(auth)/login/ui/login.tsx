'use client';

import { Box } from '@/shared/ui/box';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { useState } from 'react';
import styles from './login.module.scss';
import Link from 'next/link';

export function LoginPage() {
	const [formState, setFormState] = useState({
		email: '',
		password: '',
	});

	return (
		<div className={styles.container}>
			<form className={`${styles.login}`}>
				<h1>CSIT Legacy</h1>
				<Box
					variant='default'
					name='Вход'>
					<div className={`${styles['field']}`}>
						<label>Почта:</label>
						<Input
							value={formState.email}
							handleChange={(newValue) => setFormState({ ...formState, email: newValue })}
							name='login-email'
							type='email'
							placeholder='Почта'
						/>
					</div>
					<div className={`${styles['field']}`}>
						<label>Пароль:</label>
						<Input
							value={formState.password}
							handleChange={(newValue) => setFormState({ ...formState, password: newValue })}
							name='login-password'
							type='password'
							placeholder='Пароль'
						/>
					</div>
					<Button
						customClassName={`${styles['button']}`}
						variant='default'
						onClick={() => {
							console.log('click');
						}}>
						Войти
					</Button>
					<Link
						className={`${styles['link-to-reg']}`}
						href='/register'>
						Зарегистрироваться
					</Link>
				</Box>
			</form>
		</div>
	);
}
