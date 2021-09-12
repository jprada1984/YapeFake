import App from './App.svelte';
import QRScanner from 'svelte-qr-scanner'

const app = new App({
	target: document.body,
	props: {
		name: 'QR'
	}
});

export default app;