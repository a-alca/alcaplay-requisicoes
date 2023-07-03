import { conectaApi } from "./conectaApi.js"; // para exportar a variavel conectaApi.js responsavel por devolver a funcao listaVideos que convert para json o objeto array de lista de videos do db.json

const lista = document.querySelector("[data-lista]") // data Attributes servem para individualizar os elementos permitindo que através deles manipulemos o DOM, a estrutura é um data-nomequequiser. Nesse estudo, por exemplo, a variavel do tipo const, lista, vai fazer uma query no documento html e selecionar o atributo data-lista e dai conseguimos manipular a tag <ul></ul> que foi onde atribuimos o data-lista (redundante pra fixar *_*)

function buildCard(title, description, url, img) { // criado uma funcao para construir um card onde será adicionado o video na lista ... depois recebe as informacoes do listaApi.forEach (title, description, url, img) para a construcao do card.
    const video = document.createElement("li") // a variavel video do tipo const vai receber o documento html e crirar ...
    video.className = "videos__item" // ... um elemento na tag <li class="videos__item"></li>
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}" 
                    title="${title}" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscopy; picture_in_picture"
                    allowfullscreen></iframe>
                <div class="video__description">
                    <img src="${img}" alt="logo canal AlcaPlay">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
    ` // esta estrutura é chamada de TEMPLATE STRINGS, para que seja possivel deixar o projeto dinamico e por obviedade, essa estrutura vai criar o card no html e recebera as variaveis url, title, img and description.
    return video
}

async function listaVideos() {
    const listaApi = await conectaApi.listaVideos() // devolve a funcao listaVideos que convert para json o objeto array de lista de videos do db.json
    listaApi.forEach(element => lista.appendChild(buildCard(element.title, element.description, element.url, element.img))) // le-se que para cada (foreach) elemento da listaApi, o adicionaremos como filho (li) para o pai lista (ul) e para isso acontecer, o appendChild recebe a funcao buldCard, e para coonstrucao desse card compoem o element.title, element.description, element.img
}

listaVideos();
