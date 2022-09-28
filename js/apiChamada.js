'use strict'

const showCourse = async () => {
    const url = `http://localhost:2020/cursos`
    const response = await fetch(url)

    const listaCurso = await response.json()
    return listaCurso
}


export {
    showCourse
}














