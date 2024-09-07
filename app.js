function pesquisaReceitas() {
  // variaveis
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // condição para o caso do campo de pesquisa esteja em branco não mostrar os items
  if (!campoPesquisa) {
    section.innerHTML = `
        <div class="item-resultado">
            <h2>Digite algo!</h2>
        </div>
    `;
    return;
  }
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultado = "";
  let titulo = "";
  let manual = "";

  // Itera sobre cada item da lista de items
  for (let item of listagemReceitas) {
    titulo = item.titulo.toLowerCase();
    manual = item.manual.toLowerCase();
    if (titulo.includes(campoPesquisa) || manual.includes(campoPesquisa)) {
      // Cria um novo elemento HTML para cada resultado
      resultado += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${item.titulo}</a>
                </h2>
                <img src="${item.imagem}" alt="${item.titulo}" class="imagem-receita" />
                <p class="descricao-meta paragrafo">${item.manual}</p>
                <a href=${item.link} target="_blank">Mais informações</a>
            </div>
            `;
    }
  }
  if (!resultado) {
    resultado = `
    <div class="item-resultado">
      <h2>Desculpe, Nenhuma receita encontrada!</h2>
    </div>
    `;
  }
  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultado;
}
