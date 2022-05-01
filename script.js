document.getElementById('criar-tarefa').addEventListener('click', () => {
  document
    .getElementById('lista-tarefas')
    .appendChild(document.createElement('li')).innerText =
    document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
});
document.getElementById('lista-tarefas').addEventListener('click', () => {
    document.querySelector('.gray').classList.remove('gray');
    event.target.className = 'gray';
  
});
