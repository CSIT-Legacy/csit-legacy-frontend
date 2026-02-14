import { useState } from 'react';

export function LoginForm() {
	const [formError, setFormError] = useState({
		email: null,
		password: null,
		general: null,
	});
}
