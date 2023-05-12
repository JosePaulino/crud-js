// Função para adcionar nova linha na tabela
function addTabela() {
  //Define as variaveis e define os dados
  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let fone = document.getElementById('fone').value
  let curso = document.getElementById('curso').value
  let table = document.getElementById("myTable")

  let tableSize = table.rows.length // Calculando o tamanho da tabela
  let row = table.insertRow(tableSize) //Inserindo uma linha abaixo da Tabela
  let cell1 = row.insertCell(0) // Inserindo as celulas da linha
  let cell2 = row.insertCell(1)
  let cell3 = row.insertCell(2)
  let cell4 = row.insertCell(3)
  let cell5 = row.insertCell(4)
  let cell6 = row.insertCell(5)
  row.id = tableSize //Adicionando o id no elemento a ser criado

  // Criando o codigo do botao para remover a linha
  let btnCode = "<button class='remove-btn' onclick='removeTable(this)'>Remover</button>"

  //Preenchendo as celulas da linha
  cell1.innerHTML = tableSize
  cell2.innerHTML = nome
  cell3.innerHTML = email
  cell4.innerHTML = fone
  cell5.innerHTML = curso
  cell6.innerHTML = btnCode

  //Limpando os campos de insercao de dados
  document.getElementById('nome').value = ""
  document.getElementById('email').value = ""
  document.getElementById('fone').value = ""
  document.getElementById('curso').value = ""

  //Retornando 'false' para impedir o reload da pagina
  return false
}

//Função para remover uma linha
function removeTable(id) {
  let row = id.parentNode.parentNode.id //Pegando o id do avô do botao
  row = document.getElementById(row) // Recebendo o elemento da linha pelo ID
  row.parentNode.removeChild(row) //Removendo a linha

  //Retornando 'false' para impedir o reload da pagina
  return false 
}

