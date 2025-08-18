'use client';

import { InputHTMLAttributes, useState, useRef, ChangeEvent } from 'react';
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

	const updateImage = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files);
		}
	};

	const handleUploadClick = () => {
		fileInputRef.current?.click();
	};

	return (
		<div className={styles.container}>
			<div
				className={`${styles.dropZone} ${styles[variant ?? 'default']}`}
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
