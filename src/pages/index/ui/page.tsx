import { Checkbox } from '@/shared/ui/checkbox/ui/checkbox';
import { FileUpload } from '@/shared/ui/file-upload';

export function Page() {
	return (
		<div>
			<h1>Hello, World! </h1>
			<Checkbox
				variant='default'
				label='Abobus'
			/>
			<Checkbox
				variant='primary'
				label='Abobus'
			/>
			<Checkbox
				variant='error'
				label='Abobus'
			/>
			<Checkbox
				variant='success'
				label='Abobus'
			/>
			<Checkbox
				variant='info'
				label='Abobus'
			/>
			<Checkbox
				variant='warning'
				label='Abobus'
			/>
			<FileUpload
				variant='default'
				label='Abobus'
			/>
			<FileUpload
				variant='primary'
				label='Abobus'
			/>
			<FileUpload
				variant='error'
				label='Abobus'
			/>
			<FileUpload
				variant='success'
				label='Abobus'
			/>
			<FileUpload
				variant='info'
				label='Abobus'
			/>
			<FileUpload
				variant='warning'
				label='Abobus'
			/>
		</div>
	);
}
