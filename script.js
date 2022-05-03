const lista = document.getElementById('lista-tarefas');
const texto = document.getElementById('texto-tarefa');
// criar lista salva
function listaSalva() {
  if (localStorage.getItem('lista') != null) {
    const listaSalva1 = localStorage.getItem('lista').split(',');
    for (let i = 0; i < listaSalva1.length; i += 1) {
      lista.appendChild(document.createElement('li')).innerText =
        listaSalva1[i];
    }
    const feitoSalvo = localStorage.getItem('complet').split(',');
    for (let i2 = 0; i2 < feitoSalvo.length; i2 += 1) {
      document.getElementsByTagName('li')[i2].className = 'completed';
    }
  }
}
// salvar
document.getElementById('salvar-tarefas').addEventListener('click', () => {
  const liLength = document.getElementsByTagName('li').length;
  let arrLi = [];
  let complet = [];
  localStorage.removeItem('lista');
  localStorage.removeItem('complet');
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
listaSalva();
// criar-tarefa
document.getElementById('criar-tarefa').addEventListener('click', () => {
  lista.appendChild(document.createElement('li')).innerText = texto.value;
  texto.value = '';
});
// seleciona
lista.addEventListener('click', () => {
  if (document.querySelector('.gray') != null) {
    document.querySelector('.gray').classList.remove('gray');
  }
  event.target.classList.toggle('gray');
});
// remover-selecionado
document.getElementById('remover-selecionado').addEventListener('click', () => {
  if (document.querySelector('.gray') != null) {
    document.querySelector('.gray').remove(document.querySelector('.gray'));
  }
});
// mover
document.getElementById('mover-baixo').addEventListener('click', () => {
  if (document.querySelector('.gray') != null) {
    const gray = document.querySelector('.gray');
    if (gray.nextSibling != null) {
      const htmlAtu = gray.outerHTML;
      const htmlNext = gray.nextSibling.outerHTML;
      gray.nextSibling.outerHTML = htmlAtu;
      gray.outerHTML = htmlNext;
    }
  }
});
// mover
document.getElementById('mover-cima').addEventListener('click', () => {
  if (document.querySelector('.gray') != null) {
    const gray = document.querySelector('.gray');
    if (gray.previousSibling != null) {
      const outro = gray.previousSibling.outerHTML;
      gray.previousSibling.outerHTML = gray.outerHTML;
      document.querySelectorAll('.gray')[1].outerHTML = outro;
    }
  }
});
// add completo
lista.addEventListener('dblclick', () => {
  event.target.classList.toggle('completed');
});
// 'apaga-tudo'
document.getElementById('apaga-tudo').addEventListener('click', () => {
  lista.innerHTML = '';
});
// remover-finalizados
document.getElementById('remover-finalizados').addEventListener('click', () => {
  const quantCompleta = document.querySelectorAll('.completed').length;
  for (let i = 0; i < quantCompleta; i += 1) {
    document
      .querySelector('.completed')
      .remove(document.querySelector('.completed'));
  }
});
