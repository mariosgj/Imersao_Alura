function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos pelo seu ID
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa == "") {
        section.innerHTML = "nada foi encontrado";
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Intera sobre cada elemento (dado) dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado"> <h2> <a href="#" target="_blank">${dado.titulo}</a> </h2>
                <p class="descricao-meta"> ${dado.descricao} </p> <a href=${dado.link} target="_blank">Mais informações</a> </div>
        `;
        }

    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}
