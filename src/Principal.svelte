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
		<div class="divdonarnombre">
			<h3 class="h3donarnombre">VIDAWASI PERÚ</h3>
			<h3 class="h3donarlema">CONSTRUYAMOS VIDA</h3>
		</div>
	</div>
</div>