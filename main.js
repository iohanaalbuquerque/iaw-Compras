const inputItem = document.getElementById('item');
const btnAdicionar = document.getElementById('adicionar');
const btnContar = document.getElementById('contar');
const lista = document.getElementById('lista-compras');

let contador = 0;

btnAdicionar.addEventListener('click', () => {
    const item = inputItem.value.trim();

    if (item) {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = item;
        lista.appendChild(paragrafo);
        contador++;
        inputItem.value = '';
        inputItem.focus();
    } else {
        alert('Por favor, digite o nome de um item.');
    }
});

btnContar.addEventListener('click', () => {
    alert(`${contador} item(ns) foram adicionados à lista de compras.`);
});