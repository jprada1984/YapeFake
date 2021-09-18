<script>
    import { QRcodigo } from './stores.js';
    export let nombreya = new String ("");
    let numnom = ""
    nombreya = $QRcodigo;
    nombreya = nombreya.slice(14,-16);
    numnom = nombreya.slice(0,2);
    nombreya = nombreya.slice(parseInt(numnom)+2+25);
</script>
<div class="divyapear">
    {nombreya}
</div>