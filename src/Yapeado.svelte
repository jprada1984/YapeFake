<svelte:head>
    <meta name="Apple-mobile-web-app-status-bar-style" content="#4a1972">
	<meta name="theme-color" content="#4a1972">
	<meta name="msapplication-TileColor" content="#4a1972">
</svelte:head>

<script>
    import { push } from "svelte-spa-router";
    import { PriDaNombre, PriDaFecha, PriDaMonto, PriDaPone, SecDaMonto, SecDaFecha, SecDaDes } from './stores.js';
    import { onMount } from 'svelte';

    function subbotoncompartir(){
        bodymovin.goToAndStop(54,true);
        html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas)
        });

        const canvas = await html2canvas(document.querySelector("#capture"));
        const dataUrl = canvas.toDataURL();
        const blob = await (await fetch(dataUrl)).blob();
        const filesArray: File[] = [new File([blob], 'htmldiv.png', { type: blob.type, lastModified: new Date().getTime() })];
        const shareData = {
            files: filesArray,
        };
        navigator.share(shareData as any).then(() => {
            console.log('Shared successfully');
        });
    }

    function subbotoninicio(){
        push('/Principal');
    }

    function subbotonyapearte(){
        push('/Camara');
    }

    onMount(async () => {
        var animation = bodymovin.loadAnimation({
        container: document.getElementById('bm'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets7.lottiefiles.com/packages/lf20_4xt4sirg.json'
        })
    });
</script>

<div class="divyapeadomain">
    <div id="capture" class="divdegrado">
    <div class="divyapeadotop">
        <div id ="bm" class="divyapeadotopcell">
        </div>
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