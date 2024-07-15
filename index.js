// Importando o módulo Express para criar e configurar o servidor
const express = require("express")

// Inicializando o Express
const app = express()

// Definindo a porta na qual o servidor vai rodar
const port = process.env.PORT || 3000

// Importando os dados dos cursos a partir de um arquivo JSON
const cursos = require("./src/cursos/cursos.json")

// Definindo a rota "/cursos" que retorna os dados dos cursos em formato JSON
app.get("/cursos", (req,res)=> {
    // Retorna os dados dos cursos em formato JSON
    return res.json(cursos)
})

// Inicializando o servidor na porta definida anteriormente
app.listen(port, () =>{
    // Mensagem exibida no console quando o servidor está funcionando
    console.log("Servidor está funcionando.");
})