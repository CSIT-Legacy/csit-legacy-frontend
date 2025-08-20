'use client';

import { InputHTMLAttributes, useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import styles from './file-upload.module.scss';
import UploadIcon from '../assets/upload.svg';
import FileUploadedIcon from '../assets/file-uploaded.svg';

export interface FileUploadProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	accept?: string;
	variant?: 'default' | 'primary' | 'error' | 'success' | 'info' | 'warning';
}

export function FileUpload({ variant, label, ...props }: FileUploadProps) {
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
		<div className={styles.container}>
			<div
				className={`${styles.dropZone} ${styles[variant ?? 'default']}`}
				onDragOver={handleDragOver}
				onDrop={handleFileDrop}
				onClick={handleUploadClick}>
				{file ? (
					<label className={`${styles.label}`}>
						<Image
							className={`${styles.image}`}
							src={FileUploadedIcon.src}
							alt='file uploaded'
						/>
						{file[0].name}
					</label>
				) : (
					<label className={`${styles.label}`}>
						<Image
							className={`${styles.image}`}
							src={UploadIcon.src}
							alt='upload'
						/>
						{label}
					</label>
				)}
				<input
					ref={fileInputRef}
					type='file'
					className={`${styles['file-upload']}`}
					accept={props.accept}
					onChange={updateImage}
					multiple
				/>
			</div>
		</div>
	);
}
