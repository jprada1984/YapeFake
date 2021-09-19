<script>
    import { push } from "svelte-spa-router";
    import { QRcodigo } from './stores.js';

    export let nombreya = new String ("");
    nombreya = $QRcodigo;
    nombreya = nombreya.slice(14,-16);
    nombreya = nombreya.slice(parseInt(nombreya.slice(0,2))+2+25)
    nombreya = nombreya.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');

    function botonatras(){
		push('/Camara');
	}

    function botonequis(){
		push('/Principal');
	}
</script>
<div class="divyapearmain">
    <div class="divyapeartop">
        <div class="divyapeariz">
            <button on:click={botonatras} class="botonatrasya"></button>
        </div>
        <div class="divyapearme">
            <h3>Yapear a</h3>
        </div>
        <div class="divyapearde">
            <button on:click={botonequis} class="botonequisya"></button>
        </div>
        <div class="divnombreyapear"><h3 class="nombreyapear">{nombreya}</h3></div>
    </div>
    <div class="divyapearmedio">
        pon monto
    </div>
    <div class="divyapeardown">
        <input type="text" class="inputdesc" name="inputdes" placeholder="Agregar mensaje" />
        <button on:click={subbotonyapearya} class="botonyapearya">Yapear</button>
    </div>
</div>