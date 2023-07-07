const form = document.querySelector("[data-form]")

function criateVideo(event) { // cria a funcao de criar video recebendo o value (valor) do que o usuário deigitar
    event.preventDefault() // evita que por default, a pagina recarregue no submit pelo usuario
    const img = document.querySelector("[data-img]").value
    const url = document.querySelector("[data-url]").value
    const title = document.querySelector("[data-title]").value
    const description = Math.floor(Math.random() * 10).toString()
}

form.addEventListener("submit", event => criateVideo(event)) // assim que o usuário apertar no botao submit do formulário, o addEventListenner vai "ouvir" esse submit e contara a fofoca do que que ta acontecendo ali, que o evento. E para nao atualizar a pagina, incluimos esse evento pra ser recebido pela funcao criateVideo.
