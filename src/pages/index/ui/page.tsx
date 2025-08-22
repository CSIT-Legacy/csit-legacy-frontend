'use client';

import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { FileUpload } from "@/shared/ui/file-upload";
import { Input } from "@/shared/ui/input";
import { RadioButton } from "@/shared/ui/radio-button";
import { useState } from "react";

const variants = ['default', 'error', 'success', 'info', 'warning'] as const;
type VariantKey = typeof variants[number];

export function Page() {
	const state = useState<string>('');

	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', margin: '1rem' }}>
				{variants.map((variant) => (
					<Button
						variant={variant as VariantKey}
						key={variant}>
						Aboba
					</Button>
				))}
			</div>
			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', margin: '1rem' }}>
				{variants.map((variant) => (
					<RadioButton
						variant={variant as VariantKey}
						label='Aboba'
						key={variant}
					/>
				))}
			</div>
			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', margin: '1rem' }}>
				{variants.map((variant) => (
					<Checkbox
						variant={variant as VariantKey}
						label='Aboba'
						key={variant}
					/>
				))}
			</div>
			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', margin: '1rem' }}>
				{variants.map((variant) => (
					<FileUpload
						variant={variant as VariantKey}
						key={variant}
						label="Fimoz"
					/>
				))}
			</div>
			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', margin: '1rem' }}>
				{variants.map((variant) => (
					<Input
						state={state}
						key={variant}
						name='aboba'
						placeholder={variant}
						variant={variant}
					/>
				))}
			</div>
		</>
	);
}
