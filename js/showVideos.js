import { conectaApi } from "./conectaApi.js"; // para exportar a variavel conectaApi.js responsavel por devolver a funcao listaVideos que convert para json o objeto array de lista de videos do db.json

const lista = document.querySelector("[data-lista]") // data Attributes servem para individualizar os elementos permitindo que através deles manipulemos o DOM, a estrutura é um data-nomequequiser. Nesse estudo, por exemplo, a variavel do tipo const, lista, vai fazer uma query no documento html e selecionar o atributo data-lista e dai conseguimos manipular a tag <ul></ul> que foi onde atribuimos o data-lista (redundante pra fixar *_*)

function buildCard() { // criado uma funcao para construir um card onde será adicionado o video na lista 
    const video = document.createElement("li") // a variavel video do tipo const vai receber o documento html e crirar ...
    video.className = "videos__item" // ... um elemento na tag <li class="videos__item"></li>
    video.innerHTML = `
    <iframe width="100%" height="72%" src="https://www.youtube.com/embed/gLciG7la7cg" 
                    title="Relaxing Plant Tour 2023 | my entire houseplant collection" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscopy; picture_in_picture"
                    allowfullscreen></iframe>
                <div class="video__description">
                    <img src="./img/logo.gif" alt="logo canal AlcaPlay">
                    <h3>Relaxing Plant Tour 2023 | my entire houseplant collection</h3>
                    <p>3 mil visualizações</p>
                </div>
    ` // aqui a variavel video vai jogar no html esse com modelo para criar um novo objeto dentro da lista
    return video
}

async function listaVideo() {
    const lista = await conectaApi.listaVideos() // devolve a funcao listaVideos que convert para json o objeto array de lista de videos do db.json
}