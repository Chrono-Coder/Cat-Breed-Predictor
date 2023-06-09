import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<title>Cat Breed Classifier</title>
			<meta name='description' content='Cat Breed Classifier' />
			<meta name='theme-color' content='#000000' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<link rel='icon' href='/logo.png' />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
