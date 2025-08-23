'use client';

import { InputHTMLAttributes, useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import styles from './file-upload.module.scss';
import UploadIcon from '../assets/upload.svg';
import FileUploadedIcon from '../assets/file-uploaded.svg';

export interface FileUploadProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	variant?: 'default' | 'primary' | 'error' | 'success' | 'info' | 'warning';
	customClassName?: string;
}

export function FileUpload({ variant, label, customClassName, ...props }: FileUploadProps) {
	const [file, setFile] = useState<FileList | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const updateImage = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setFile(event.target.files);
		}
	};

	const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
	};

	const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		if (event.dataTransfer.files) {
			setFile(event.dataTransfer.files);
		}
	};

	const handleUploadClick = () => {
		fileInputRef.current?.click();
	};

	return (
		<div className={`${styles.container} ${customClassName ?? ''}`}>
			<div
				className={`${styles['drop-zone']} ${styles[variant ?? 'default']}`}
				onDragOver={handleDragOver}
				onDrop={handleFileDrop}
				onClick={handleUploadClick}>
				{file ? (
					<label className={`${styles.label}`}>
						<Image
							className={`${styles.image}`}
							src={FileUploadedIcon.src}
							alt='file uploaded'
							width='1'
							height='1'
						/>
						{file[0].name}
					</label>
				) : (
					<label className={`${styles.label}`}>
						<Image
							className={`${styles.image}`}
							src={UploadIcon.src}
							alt='upload'
							width='1'
							height='1'
						/>
						{label}
					</label>
				)}
				<input
					ref={fileInputRef}
					type='file'
					className={`${styles['file-upload']}`}
					onChange={updateImage}
					{...props}
				/>
			</div>
		</div>
	);
}
