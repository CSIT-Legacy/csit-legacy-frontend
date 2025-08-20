'use client';

import { InputHTMLAttributes, useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import styles from './file-upload.module.scss';
import DownloadIcon from '../assets/download.svg';
import FileDownloadedIcon from '../assets/file-downloaded.svg';

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
							src={FileDownloadedIcon.src}
							alt='file downloaded'
						/>
						{file[0].name}
					</label>
				) : (
					<label className={`${styles.label}`}>
						<Image
							className={`${styles.image}`}
							src={DownloadIcon.src}
							alt='downloaded'
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
