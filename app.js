let section = document.getElementById('resultados-pesquisa');

function pesquisar() {

    let campoPesquisa = document.getElementById('campo-pesquisa').value;    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for(let item of dados) {
        titulo = item.titulo.toLowerCase();
        descricao = item.descricao.toLowerCase();
        tags = item.tags.toLowerCase();

        if(campoPesquisa == "") {
            section.innerHTML = `<div class="item-resultado">
                        <h2>Nada foi encontrado. Digite o nome de um atleta ou esporte.</h2>
                      </div>`;
            return
        }
        
        campoPesquisa = campoPesquisa.toLowerCase();

        if(titulo.includes(campoPesquisa) || 
            descricao.includes(campoPesquisa) ||
            tags.includes(campoPesquisa)) {
                
            resultados += `
                <div class="item-resultado">
                    <h2><a href="${item.linkIg}" target="_blank">${item.titulo}</a></h2>
                    <p class="descricao-meta">${item.descricao}</p>
                    <a href="${item.linkWiki}" target="_blank">Mais informações</a>
                </div>
            `;
        }
        
    };

    if(!resultados) {
        resultados = `<div class="item-resultado">
                        <h2>Nada foi encontrado.</h2>
                      </div>`;
    }

    section.innerHTML = resultados;
};