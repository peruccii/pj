'use strict'

const showCourse = async () => {
    const url = `http://localhost:2020/cursos`
    const response = await fetch(url)

    const listaCurso = await response.json()
    return listaCurso
}

const getAlunoStatus = async (status, curso) => {
    const url = `http://localhost:2020/estudantes/${status}/${curso}`
    
    const response = await fetch(url)
    const listaAlunos = await response.json()
    return listaAlunos
}

const getAlunosCurso = async (curso) => {

    const url = `http://localhost:2020/alunos/${curso}`

    const response = await fetch(url)
    const listaAlunos = await response.json()

    return listaAlunos
}



export {
    showCourse,
    getAlunoStatus,
    getAlunosCurso
}














