
console.log(url);
<script type="module" src="graficos/informacoesGlobais.js"></script>

async function vizualizarInformacoesGlobais() {

}
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
}


  