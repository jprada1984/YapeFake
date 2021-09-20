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
<div class="divyapeadomain">
    <div class="divyapeartop">
        hola
    </div>
</div>