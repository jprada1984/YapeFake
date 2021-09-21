<svelte:head>
    <meta name="Apple-mobile-web-app-status-bar-style" content="#4a1972">
	<meta name="theme-color" content="#4a1972">
	<meta name="msapplication-TileColor" content="#4a1972">
</svelte:head>

<script>
    import { push } from "svelte-spa-router";
    import { PriDaNombre, PriDaFecha, PriDaMonto, PriDaPone, SecDaMonto, SecDaFecha, SecDaDes } from './stores.js';
    import { onMount } from 'svelte';
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

  let controlsLayout = [
    'previousFrame',
    'playpause',
    'stop',
    'nextFrame',
    'progress',
    'frame',
    'loop',
    'spacer',
    'background',
    'snapshot',
    'zoom',
    'info',
  ];

    function subbotoncompartir(){
        alert("Hola");
    }

    function subbotoninicio(){
        push('/Principal');
    }

    function subbotonyapearte(){
        push('/Camara');
    }
</script>

<div class="divyapeadomain">
    <div class="divyapeadotop">
        <LottiePlayer
            src="https://assets4.lottiefiles.com/packages/lf20_7i5gcnnn.json"
            autoplay="{true}"
            loop="{true}"
            controls="{false}"
            renderer="svg"
            background="transparent"
            height="{600}"
            width="{600}"
            controlsLayout="{controlsLayout}"
        />
    </div>
    <div class="divyapeadomedio">
        <div class="divyapeadomediotop"></div>
        <div class="divyapeadomediomedio">
            <h3 class="letrayapeaste">¡Yapeaste!</h3>
            <div class="montodiv">
                <span class="spanmontoya">S/</span>
                <span class="inputmontoya">{$SecDaMonto}</span>
            </div>
            <h3 class="letrasnombre">{$PriDaNombre}</h3>
            <h3 class="letrasfecha">{$SecDaFecha}</h3>
            {#if $SecDaDes !== ""}
            <div class="divletrasdes"><h3 class="letrasdescri">{$SecDaDes}</h3></div>
            {/if}
        </div>
        <div class="divyapeadomediodown"></div>
    </div>
    <div class="divyapeadoabajo">
        <div class="latbot">1</div>
        <div class="mediobot">
            <button on:click={subbotoncompartir} class="botoncompartir"></button>
            <h3 class="textoabajoboton">Compartir</h3>
        </div>
        <div class="mediobot">
            <button on:click={subbotoninicio} class="botoninicioya"></button>
            <h3 class="textoabajoboton">Ir a inicio</h3>
        </div>
        <div class="mediobot">
            <button on:click={subbotonyapearte} class="botonyapearte"></button>
            <h3 class="textoabajoboton">Nuevo Yapeo</h3>
        </div>
        <div class="latbot">5</div>
    </div>
</div>