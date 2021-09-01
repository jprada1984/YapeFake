<script>
	export let name;
</script>

<main>
	<div class="divlogin">
		<div class="divquestion"><img class="imgquestion" alt="question" src="/question.svg" height="36px" width="36px" /></div>
		<div class="divqrpri">
			<div class="divqrsec">
				hola
			</div>
		</div>
		<h4>Recibe pagos por {name}</h4>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
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