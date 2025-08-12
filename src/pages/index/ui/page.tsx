import { Button } from '@/shared/ui/button';
import { RadioButton } from '@/shared/ui/radio-button';

export function Page() {
	return (
		<div>
			<h1>Hello, World! </h1>
			<Button variant='info'>Aboba</Button>
			<RadioButton variant='default'>Abobus</RadioButton>
			<RadioButton variant='primary'>Abobus</RadioButton>
			<RadioButton variant='error'>Abobus</RadioButton>
			<RadioButton variant='success'>Abobus</RadioButton>
			<RadioButton variant='info'>Abobus</RadioButton>
			<RadioButton variant='warning'>Abobus</RadioButton>
		</div>
	);
}
