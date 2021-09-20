<script>
    import { push } from "svelte-spa-router";
    import { QRcodigo } from './stores.js';
    import { onMount } from 'svelte';

    export let nombreya = new String ("");
    export let yapemonto = "";
    export let inputdisabled = "disabled";

    nombreya = $QRcodigo;
    nombreya = nombreya.slice(14,-16);
    nombreya = nombreya.slice(parseInt(nombreya.slice(0,2))+2+25);
    nombreya = nombreya.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');

    function botonatras(){
		push('/Camara');
	}

    function botonequis(){
		push('/Principal');
	}

    function subbotonyapearya(){
		alert(yapemonto);
	}

    function oninputyapear(){
        if (yapemonto > 0){
            inputdisabled="";
        }else{
            inputdisabled="disabled"
        }
    }

    onMount(async () => {
        document.getElementById("inputmonto").focus();
    });
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
        <span class="spanmonto">S/</span>
        <input required bind:value="{yapemonto}" maxlength="6" on:input="{oninputyapear}" oninput="this.style.width = ((this.value.length + 1) * 10.5) + 'vw';" type="number" class="inputmonto" id="inputmonto" placeholder="0" />
    </div>
    <div class="divyapeardown">
        <input type="text" class="inputdesc" name="inputdes" placeholder="Agregar mensaje" />
        <button disabled="{inputdisabled}" on:click={subbotonyapearya} class="botonyapearya">Yapear</button>
    </div>
</div>