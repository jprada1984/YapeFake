<svelte:head>
    <meta name="Apple-mobile-web-app-status-bar-style" content="#742284">
	<meta name="theme-color" content="#742284">
	<meta name="msapplication-TileColor" content="#742284">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
	<script defer type="text/javascript" src="instascan.min.js"></script>
	<script defer src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.13/lottie.min.js" integrity="sha512-srGxQe2w7s50+5/nNgEVKYtBm15zRylJwdjxYnGEZr3mmHFJKFjA/ImA2OKizVzoIDX8XISMHDI1+az9pnumbQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script defer type="text/javascript" src="html2canvas.min.js"></script>
</svelte:head>

<script>

	import { push } from "svelte-spa-router";
	import { PriDaNombre, PriDaFecha, PriDaMonto, PriDaPone } from './stores.js';
	
    let items = [
		{ nombre: "Maribel Condori Carpio", fecha: '19 Sep. 2021 - 9:20 pm - Vino', monto: '- S/ 13.00', pone: 'h3montone'},
		{ nombre: "Ana Vega Fernández", fecha: '10 Sep. 2021 - 9:33 am - Empanada', monto: '- S/ 4.50', pone: 'h3montone'},
		{ nombre: "Alberto Sánchez Zapata", fecha: '26 Ago. 2021 - 7:25 pm - Six Cerveza', monto: '- S/ 21.00', pone: 'h3montone'},
		{ nombre: "Jose Luis Quispe Flores Carpio", fecha: '17 Ago. 2021 - 10:50 am', monto: 'S/ 30.00', pone: 'h3monto'},
		{ nombre: "Jimena García Rojas", fecha: '10 Ago. 2021 - 10:38 am', monto: 'S/ 10.00', pone: 'h3monto'},
		{ nombre: "Juan Carlos Castillo Pérez", fecha: '2 Ago. 2021 - 10:28 am - Pizza', monto: '- S/ 38.00', pone: 'h3montone'},
		{ nombre: "Alberto Sánchez Zapata", fecha: '29 Jul. 2021 - 8:34 pm - Whisky', monto: '- S/ 22.00', pone: 'h3montone'},
		{ nombre: "Sofía Milagros Vargas Castro", fecha: '23 Jul. 2021 - 8:23 am - Pago', monto: '- S/ 25.00', pone: 'h3montone'},
		{ nombre: "María Carmen Romero Salazar", fecha: '23 Jul. 2021 - 12:46 pm', monto: 'S/ 50.00', pone: 'h3monto'}
	];

	function iraqr(){
		push('/Camara');
	}
</script>

<div class="divprincipal">
	<div class="divbienvenida"><h3 class="h3bien">&#161;Bienvenido, yapero&#33;</h3></div>
	<div class="divsaldo">
		<button class="botonsaldo"><img class="imgojo" src="ojo.svg" alt="botonsaldo"/>Mostrar Saldo</button>
	</div>
	<div class="divdonar">
		<div class="divdonaricono"></div>
		<div class="divdonarnombrepri">
			<div class="divdonarnombre">
				<h3 class="h3donarnombre">VIDAWASI PERÚ</h3>
				<h3 class="h3donarlema">CONSTRUYAMOS VIDA</h3>
			</div>
		</div>
		<div class="divdonarboton">
			<button class="botondonar">Donar</button>
		</div>
	</div>
	<div class="divmovi">
		<div class="divulti">
			<h3 class="h3ulti">Últimos Movimientos</h3>
		</div>
		<div class="divvertodo">
			<h3 class="h3vertodo">Ver todos</h3>
		</div>
	</div>
	<div class="divprilista">
		{#if $PriDaNombre !== ""}
		<div class="divitem">
			<div class="divdes">
				<div class="divdes1">
					<h3 class="h3nombre">{$PriDaNombre}</h3>
					<h3 class="h3fecha">{$PriDaFecha}</h3>
				</div>
			</div>
			<div class="divmonto">
				<h3 class="{$PriDaPone}">{$PriDaMonto}</h3>
			</div>
		</div>
		{/if}
		{#each items as item}
		<div class="divitem">
			<div class="divdes">
				<div class="divdes1">
					<h3 class="h3nombre">{item.nombre}</h3>
					<h3 class="h3fecha">{item.fecha}</h3>
				</div>
			</div>
			<div class="divmonto">
				<h3 class="{item.pone}">{item.monto}</h3>
			</div>
		</div>
		{/each}
	</div>
	<div class="divprifooter">
		<div class="divesca">
			<button on:click={iraqr} class="botonesca"><img class="imgqr" src="qr.svg" alt="botonescanear"/>Escanear QR</button>
		</div>
		<div class="divyapear">
			<button class="botonyapear"><img class="imgflecha" src="flecha.svg" alt="botonyapear"/>Yapear</button>
		</div>
	</div>
</div>