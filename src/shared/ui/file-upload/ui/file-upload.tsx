'use client';

import React, { InputHTMLAttributes, useState, useRef, ChangeEvent } from 'react';
import styles from './file-upload.module.scss';
import DownloadIcon from '../assets/download.svg';
import FileDownloadedIcon from '../assets/file-downloaded.svg';

export interface FileUploadProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	variant?: 'default' | 'primary' | 'error' | 'success' | 'info' | 'warning';
}

export function FileUpload({ variant, label }: FileUploadProps) {
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

	const handleUploadClick = () => {
		fileInputRef.current?.click();
	};

	return (
		<div className={styles.container}>
			<div
				className={`${styles.dropZone} ${styles[variant ?? 'default']}`}
				onDragOver={handleDragOver}
				onClick={handleUploadClick}>
				{file ? (
					<label className={`${styles.label}`}>
						<img
							className={`${styles.image}`}
							src={FileDownloadedIcon.src}
						/>
						{file[0].name}
					</label>
				) : (
					<label className={`${styles.label}`}>
						<img
							className={`${styles.image}`}
							src={DownloadIcon.src}
						/>
						{label}
					</label>
				)}
				<input
					ref={fileInputRef}
					type='file'
					className={`${styles['file-upload']}`}
					accept='.pdf, .zip, .docx, .md, .pptx, .txt, .html, .rtf'
					onChange={updateImage}
					multiple
				/>
			</div>
		</div>
	);
}
