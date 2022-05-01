const lista = document.getElementById('lista-tarefas');
const texto = document.getElementById('texto-tarefa');
document.getElementById('criar-tarefa').addEventListener('click', () => {
  lista
    .appendChild(document.createElement('li')).innerText = texto.value;
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
