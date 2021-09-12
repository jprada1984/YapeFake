<script>
    let things = [
		{ id: 1, color: 'darkblue' },
		{ id: 2, color: 'indigo' },
		{ id: 3, color: 'deeppink' },
		{ id: 4, color: 'salmon' },
		{ id: 5, color: 'gold' }
	];
</script>

<div class="divprincipal">
	<div class="divbienvenida"><h3 class="h3bien">&#161;Bienvenido, yapero&#33;</h3></div>
	<div class="divsaldo">
		<button on:click={() => numero(4)} class="botonsaldo"><img class="imgojo" src="ojo.svg" alt="botonsaldo"/>Mostrar Saldo</button>
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
			<button on:click={() => numero(4)} class="botondonar">Donar</button>
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
		<div class="divitem">
			<div class="divdes">
				<div class="divdes1">
					<h3 class="h3nombre">Maribel Estela Condori</h3>
					<h3 class="h3fecha">26 Ago. 2021 - 9:20 pm - Vino</h3>
				</div>
			</div>
			<div class="divmonto">
				<h3 class="h3montone">- S/ 15.50</h3>
			</div>
		</div>
		<div class="divitem">
			<div class="divdes">
				<div class="divdes1">
					<h3 class="h3nombre">Maribel Estela Condori</h3>
					<h3 class="h3fecha">26 Ago. 2021 - 9:20 pm - Vino</h3>
				</div>
			</div>
			<div class="divmonto">
				<h3 class="h3montone">- S/ 15.50</h3>
			</div>
		</div>
		<div class="divitem">
			<div class="divdes">
				<div class="divdes1">
					<h3 class="h3nombre">Maribel Estela Condori</h3>
					<h3 class="h3fecha">26 Ago. 2021 - 9:20 pm - Vino</h3>
				</div>
			</div>
			<div class="divmonto">
				<h3 class="h3monto">S/ 16.50</h3>
			</div>
		</div>
		<div class="divitem">
			<div class="divdes">
				<div class="divdes1">
					<h3 class="h3nombre">Maribel Estela Condori</h3>
					<h3 class="h3fecha">26 Ago. 2021 - 9:20 pm - Vino</h3>
				</div>
			</div>
			<div class="divmonto">
				<h3 class="h3montone">- S/ 15.50</h3>
			</div>
		</div>
		<div class="divitem">
			<div class="divdes">
				<div class="divdes1">
					<h3 class="h3nombre">Maribel Estela Condori</h3>
					<h3 class="h3fecha">26 Ago. 2021 - 9:20 pm - Vino</h3>
				</div>
			</div>
			<div class="divmonto">
				<h3 class="h3monto">S/ 16.50</h3>
			</div>
		</div>
		<div class="divitem">
			<div class="divdes">
				<div class="divdes1">
					<h3 class="h3nombre">Maribel Estela Condori</h3>
					<h3 class="h3fecha">26 Ago. 2021 - 9:20 pm - Vino</h3>
				</div>
			</div>
			<div class="divmonto">
				<h3 class="h3montone">- S/ 15.50</h3>
			</div>
		</div>
		<div class="divitem">
			<div class="divdes">
				<div class="divdes1">
					<h3 class="h3nombre">Maribel Estela Condori</h3>
					<h3 class="h3fecha">26 Ago. 2021 - 9:20 pm - Vino</h3>
				</div>
			</div>
			<div class="divmonto">
				<h3 class="h3monto">S/ 16.50</h3>
			</div>
		</div>
		<div class="divitem">
			<div class="divdes">
				<div class="divdes1">
					<h3 class="h3nombre">Maribel Estela Condori</h3>
					<h3 class="h3fecha">26 Ago. 2021 - 9:20 pm - Vino</h3>
				</div>
			</div>
			<div class="divmonto">
				<h3 class="h3montone">- S/ 15.50</h3>
			</div>
		</div>
		<div class="divitem">
			<div class="divdes">
				<div class="divdes1">
					<h3 class="h3nombre">Maribel Estela Condori</h3>
					<h3 class="h3fecha">26 Ago. 2021 - 9:20 pm - Vino</h3>
				</div>
			</div>
			<div class="divmonto">
				<h3 class="h3monto">S/ 16.50</h3>
			</div>
		</div>
	</div>
	<div class="divprifooter">
		<div class="divesca">
			<button on:click={() => numero(4)} class="botonesca"><img class="imgqr" src="qr.svg" alt="botonescanear"/>Escanear QR</button>
		</div>
		<div class="divyapear">
			<button on:click={() => numero(4)} class="botonyapear"><img class="imgflecha" src="flecha.svg" alt="botonyapear"/>Yapear</button>
		</div>
	</div>
</div>