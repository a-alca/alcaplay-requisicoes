async function listaVideos() { // relembrando que por padrao o js é sincrono
    const conexao = await fetch("http://localhost:3000/videos"); // e ao definir uma funcao como assincrona, o await fetch aguardara uma execucao em que recebera uma response que poderá ser resolved (then) ou rejected (catch.) esse método que RECEBE é por si um method GET.
    const conexaoConvertida = await conexao.json(); // esse metodo json (JavaScript Object Notation) pega todos os dados do response em formato de bytes que era recebido no console.log(conexao) e transforma em um objeto JS que aplicado aqui por exemplo, retonar no console um array de 3 itens de videos contendo suas informacoes do db.json.
    //console.log(conexaoConvertida);

    return conexaoConvertida // o return vai retornar tudo da funcao assincrona listaVideos
}

async function videoAdd(title, description, url, img) { // vai enviar para o videoAdd
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", // relembrando que para o fetch, o único parametro obrigatorio é a URL e isso por si só é uma requisicao do metodo GET (que retorna uma promise) 
        headers: {
            "Content-type": "application/json" // o Content-type serve para especificar que tipo de arquivo que esta sendo enviado, ou recebido. Entao, quando é enviado ou recebido um arquivo JSON, é especificado o tipo de conteudo, que é o content-type, como application/json
        },
        body: JSON.stringify({ // para enviar uma requisicao, precisamos que ela seja uma string, entao, no body (que é o corpo da requisicao) o JSON.stringfy, vai transformar tudo que enviamos no corpo {title: title, description: description, url: url, img: img} em string. E com isso sera possivel criar a requisicao POST
            title: title,
            description: `${description} mil visualizações`,
            url: url,
            img: img
        })
    });

    const conexaoConvertida = await conexao.json() // mais uma vez, variavel conexaoConvertida vai agurdar a conexao.json() ...

    return conexaoConvertida // ... e retorno convertido em objeto
}

export const conectaApi = {
    listaVideos, // retorna lista de vidas para utilizacao no projeto method get
    videoAdd // possibilita implementar a adicao de video na pagina method post
}
