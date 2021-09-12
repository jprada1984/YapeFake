<script>

	import { push } from "svelte-spa-router";

    let things = [
		{ id: 1, color: 'darkblue' },
		{ id: 2, color: 'indigo' },
		{ id: 3, color: 'deeppink' },
		{ id: 4, color: 'salmon' },
		{ id: 5, color: 'gold' }
	];

	function iraqr(){
		push('/Camara');
	}

    let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
    scanner.addListener('scan', function (content) {
        console.log(content);
        msgbox(content);
    });
    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error('No cameras found.');
            msgbox('No cameras found.');
        }
    }).catch(function (e) {
        console.error(e);
    });
</script>

<div class="divprincipal">
    <video id="preview"></video>
</div>