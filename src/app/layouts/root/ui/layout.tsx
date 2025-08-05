import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/styles/globals.scss';

const determinationSans = localFont({
	src: [
		{ path: './fonts/determination/determination.woff2' },
		{ path: './fonts/determination/determination.woff' },
		{ path: './fonts/determination/determination.ttf' },
		{ path: './fonts/determination/determination.otf' },
	],
});

export const metadata: Metadata = {
	title: 'CSIT Legacy',
	description: 'Наследие нашего факультета',
};

export function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${determinationSans.className}`}>{children}</body>
		</html>
	);
}
