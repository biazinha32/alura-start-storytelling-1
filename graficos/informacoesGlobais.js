const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = Estima-se que cerca de 60% da população mundial assista a filmes regularmente. Essa porcentagem varia com fatores como idade, acesso à tecnologia e cultura. O crescimento das plataformas de streaming tem impulsionado ainda mais esse hábito globalmente.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
