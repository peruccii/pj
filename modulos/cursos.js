var cursos = [
    {
        "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla" :   "DS",
        "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
        "carga" :   "1200",
    },
    {
        "nome"  :   "002 - Técnico em Redes de Computadores",
        "sigla" :   "RDES",
        "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
        "carga" :   "1200"
    }
];


const getCurso = function(){
    
    let lista = []
    let erro = true
    let json = {}

    cursos.forEach(item => {
      lista.push(
          {
              nome: item.nome,
              sigla: item.sigla,
              foto: item.icone,
              carga: item.carga
            
          }
      )

          json.cursos = lista

      erro = false
    })
    if (erro) {
        return false
    }else{
        return lista
    }
}





module.exports = {
    getCurso
}