<script>
	export let name;

	let clave = "";

	function numero(numi){
		clave = clave + numi
		if (clave.length == 6) {
			alert ("ingreso");
		}
	}

	function numeroback(){
		clave = clave.substring(0, clave.length - 1);
	}

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
					{#if clave.length > 0}<li class="liclaveu"></li>{:else}<li class="liclave"></li>{/if}
					{#if clave.length > 1}<li class="liclaveu"></li>{:else}<li class="liclave"></li>{/if}
					{#if clave.length > 2}<li class="liclaveu"></li>{:else}<li class="liclave"></li>{/if}
					{#if clave.length > 3}<li class="liclaveu"></li>{:else}<li class="liclave"></li>{/if}
					{#if clave.length > 4}<li class="liclaveu"></li>{:else}<li class="liclave"></li>{/if}
					{#if clave.length > 5}<li class="liclaveu"></li>{:else}<li class="liclave"></li>{/if}
				</ul>
			</div>
			<div class="divpadrow1">
				<button on:click={() => numero(4)} class="pad"><p>4</p></button>
				<button on:click={() => numero(1)} class="pad"><p>1</p></button>
				<button on:click={() => numero(2)} class="pad"><p>2</p></button>
			</div>
			<div class="divpadrow2">
				<button on:click={() => numero(3)} class="pad"><p>3</p></button>
				<button on:click={() => numero(9)} class="pad"><p>9</p></button>
				<button on:click={() => numero(8)} class="pad"><p>8</p></button>
			</div>
			<div class="divpadrow2">
				<button on:click={() => numero(7)} class="pad"><p>7</p></button>
				<button on:click={() => numero(5)} class="pad"><p>5</p></button>
				<button on:click={() => numero(0)} class="pad"><p>0</p></button>
			</div>
			<div class="divpadrow2">
				<div class="padinv"></div>
				<button on:click={() => numero(6)} class="pad"><p>6</p></button>
				<button on:click={numeroback} class="padinvback"></button>
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
</style>