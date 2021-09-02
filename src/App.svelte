<script>
	export let name;
</script>

<main>
	<div class="divlogin">
		<div class="divquestion"><img class="imgquestion" alt="question" src="/question.svg" height="36px" width="36px" /></div>
		<div class="divqrpri">
			<div class="divqrsec"></div>
		</div>
		<h4>Recibe pagos por {name}</h4>
		<div class="footer">
			<h3>Ingresa tu clave Yape</h3>
			<div class="clavediv">
				<ul class="ulclave">
					<li class="liclaveu"></li>
					<li class="liclaveu"></li>
					<li class="liclaveu"></li>
					<li class="liclave"></li>
					<li class="liclave"></li>
					<li class="liclave"></li>
				</ul>
			</div>
			<div class="divpadrow1">
				<button class="pad" href="#4"><p>4</p></button>
				<button class="pad" href="#1"><p>1</p></button>
				<button class="pad" href="#2"><p>2</p></button>
			</div>
			<div class="divpadrow2">
				<button class="pad" href="#3"><p>3</p></button>
				<button class="pad" href="#9"><p>9</p></button>
				<button class="pad" href="#8"><p>8</p></button>
			</div>
			<div class="divpadrow2">
				<button class="pad" href="#7"><p>7</p></button>
				<button class="pad" href="#5"><p>5</p></button>
				<button class="pad" href="#0"><p>0</p></button>
			</div>
			<div class="divpadrow2">
				<div class="padinv"></div>
				<button class="pad" href="#6"><p>6</p></button>
				<button class="padinvback" href="#back"></button>
			</div>
			<h3 class="h3ol">¿Olvidaste tu clave?</h3>
		</div>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 0;
		margin: 0;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>