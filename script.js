const lista = document.getElementById('lista-tarefas');
const texto = document.getElementById('texto-tarefa');

function listaSalva() {
  if (localStorage.getItem('lista') != null) {
    let listaSalva = localStorage.getItem('lista').split(',');
    for (let i = 0; i < listaSalva.length; i += 1) {
      lista.appendChild(document.createElement('li')).innerText = listaSalva[i];
    }
    let feitoSalvo = localStorage.getItem('lista').split(',');
    for (let i2 = 0; i2 < feitoSalvo.length; i2 += 1) {
      document.getElementsByTagName('li')[i2].className = 'completed';
    }
  }
}

listaSalva();
document.getElementById('criar-tarefa').addEventListener('click', () => {
  lista.appendChild(document.createElement('li')).innerText = texto.value;
  texto.value = '';
});
lista.addEventListener('click', () => {
  document.querySelector('.gray').classList.remove('gray');
  event.target.classList.toggle('gray');
});
lista.addEventListener('dblclick', () => {
  event.target.classList.toggle('completed');
});

document.getElementById('apaga-tudo').addEventListener('click', () => {
  lista.innerHTML = '';
  document.getElementById('save').className = 'gray';
});
//remover-finalizados
document.getElementById('remover-finalizados').addEventListener('click', () => {
  const quantCompleta = document.querySelectorAll('.completed').length;
  for (let i = 0; i < quantCompleta; i += 1) {
    document
      .querySelector('.completed')
      .remove(document.querySelector('.completed'));
  }
});
document.getElementById('salvar-tarefas').addEventListener('click', () => {
  const liLength = document.getElementsByTagName('li').length;
  let arrLi = [];
  let complet = [];
  for (let i = 0; i < liLength; i += 1) {
    if (
      document.getElementsByTagName('li')[i].classList[1] == 'completed' ||
      document.getElementsByTagName('li')[i].classList[0] == 'completed'
    ) {
      complet.push(i);
    }
    arrLi.push(document.getElementsByTagName('li')[i].innerText);
    localStorage.setItem('lista', arrLi.join(','));
    localStorage.setItem('complet', complet.join(','));
  }
});
