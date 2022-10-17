'use strict'

import {  getAlunoStatus } from "./apiChamada.js"

const exibirAlunos = (info) => {
    const a = document.createElement('a')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    a.classList.add('alunos-card')
    img.src = info.foto
    h3.textContent = info.nome
    img.classList.add('info')
    h3.classList.add('info')
    a.id = info.matricula
    a.href = '../front/paginas/desempenhoAluno.html'

    //Estrutura IF para verificar no menu
    if(info.status == 'Cursando') {
        a.classList.add('alunos-azul')
    }
    if(info.status == 'Finalizado') {
        a.classList.add('alunos-amarelo')
    }

    a.appendChild(img)
    a.appendChild(h3)
    return a
}

const createTitle = (data) => {
    const h1 = document.createElement('h1')

    const separador = data.curso.split('-')
    h1.textContent = separador[1]

    return h1
}

const carregarAlunos = async (curso) => {

    const main = document.querySelector('main')

    main.innerHTML = ''
    const alunosContainer = document.createElement('div')
    alunosContainer.id = 'alunos-container'
    const info = await getAlunosbyCurso(curso)

    const cards = info.alunos.map(exibirAlunos)
    const title = createTitle(info.alunos[0])

    alunosContainer.classList.add('alunos-container')

    alunosContainer.replaceChildren(...cards)
    main.appendChild(title)
    main.appendChild(alunosContainer)
}

carregarAlunos(localStorage.getItem('curso'))

const carregarAlunoStatus = async (event) => {

    if (event.target.textContent == 'Status') {
        carregarAlunos(localStorage.getItem('curso'))
    } else{
        const data = await getAlunoStatus(event.target.textContent, localStorage.getItem('curso'))
        const alunosContainer = document.getElementById('alunos-container')

        const cards = data.map(exibirAlunos)
        alunosContainer.replaceChildren(...cards)
    }
}

document.getElementById('status').addEventListener('click', carregarAlunoStatus)

document.querySelector('main').addEventListener('click', (event) => {

    if (event.target.classList.contains('alunos-card')) {
        localStorage.setItem('idAluno', event.target.id)
    }
    if (event.target.classList.contains('info')) {
        localStorage.setItem('idAluno', event.target.parentElement.id)
    }

})