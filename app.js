// Import da biblioteca do express
const express = require('express')

// Import da biblioteca do cors 
 const cors = require('cors')

// Import da biblioteca do body-parser
const bodyParser = require('body-parser') 


const {getCurso} = require('./modulos/cursos.js')
const {getNomes} = require('./modulos/alunos.js')
const {getAlunosbyCurso} = require('./modulos/alunos.js')
const {getAlunobyMatricula} = require('./modulos/alunos.js')
const {getStatusFC} = require('./modulos/alunos.js')
const {getAno} = require('./modulos/alunos.js')


const { response } = require('express')


const app = express()


    //request - recebe dados 
    // response - devolve dados
    app.use((request,response, next) => {
       //Permite especificar quem serão os IPs que podem acessar a API (* - significa todos)  
       response.header('Acces-Control-Allow-Origin', '*' )
        // Permite especificar quais serao os verbos (metodos) que a API irá reconhecer
       response.header('Acces-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS')
 
       // Estabelece que as permissoes acima serao representadas pelo cors
       app.use(cors())
 
       next()
 
      })

      //Endpoint listagem de cursos
      app.get('/cursos/', cors(), async function(request,response,next){
          let cursos = getCurso()

          if(cursos){
              response.status(200)
              response.json(cursos)
          }else{
              response.status(404)
          }
      })

      //Endpoint listagem alunos sistemas
        app.get('/sistema/:alunos', cors(), async function(request,response,next){
            let chave = request.params.alunos
            let sistema = getNomes(chave)

            if (sistema){
                response.status(200)
                response.json(sistema)
            }else{
                response.status(404)
            }
        })

        //Endpoint listagem alunos do respectivo curso
        app.get('/alunos/:curso', cors(), async function(request,response,next){
            let chave = request.params.curso
            let status = request.query.status
            let alunos = getAlunosbyCurso(chave,status)

            if (alunos){
                response.status(200)
                response.json(alunos)
            }else{
                response.status(404)
            }
        })

        //Endpoint listagem pela matricula
        app.get('/statos/:matricula', cors(), async function(request,response,next){
            let chave = request.params.matricula
            let statos = getAlunobyMatricula(chave)

            if (statos){
                response.status(200)
                response.json(statos)
            }else{
                response.status(404)
            }
        })

        //Endpoint listagem alunos cursando ou finalizando
        app.get('/statos/:fc', cors(), async function(request,response,next){
            let chave = request.params.fc
            let statos = getStatusFC(chave)

            if (statos){
                response.status(200)
                response.json(statos)
            }else{
                response.status(404)
            }
        })

        //Endpoint listagem ano
        app.get('/alunosstatus/:ano', cors(), async function(request,response,next){
            let chave = request.params.ano
            let alunos = getAno(chave)

            if (alunos){
                response.status(200)
                response.json(alunos)
            }else{
                response.status(404)
            }
        })

      app.listen(2020, function(){
          console.log('Servidor aguardando requisicoes.')
      })