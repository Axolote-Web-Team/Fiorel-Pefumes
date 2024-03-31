import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MuiTheme from '@/app/MuiTheme';
import { CarritoProvider } from './components/utils/Carrito';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang='es'>
			<head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap'
					rel='stylesheet'
				></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;600;700&display=swap'
					rel='stylesheet'
				></link>
			</head>
			<body className={inter.className}>
				<MuiTheme>
					<CarritoProvider>{children}</CarritoProvider>
				</MuiTheme>
			</body>
		</html>
	);
}
