const fs = require("fs");
//ler tarefas 
function ler_tarefa(){
const dados = fs.readFileSync('tarefas.json');
return JSON.parse(dados);
}

//salvar tarefas 
function salvar_tarefas(tarefas){
 fs.writeFileSync('tarefas.Json', JSON.stringify(tarefas,null,2));
}

//adicionar tarefas
function adicionar_tarefas(nome){
const tarefas = ler_tarefa();
tarefas.push({nome})
console.log("tarefa adicionada");

}

//lista de tarefas 
function listarTarefas() {
    const tarefas = ler_tarefa();
        tarefas.forEach((t, i )=> {
            console.log(`${i + 1} - ${t.nome }`);
        
        
    });
    
}

//remover tarefas 
function removerDaLista(indice) {
    const tarefas = ler_tarefa();

    tarefas.splice(indice - 1,1);

    salvar_tarefas(tarefas);
    console.log("tarefa foi removida com sucesso ! :)");
    
    
}

const comando = process.argv[2];
const argumento = process.argv[3];

if(comando == "add"){
    adicionar_tarefas(argumento);
}

else if(comando == "list"){
    listarTarefas();
}

else if (comando == 'remove') {
    removerDaLista(Number(argumento));
}