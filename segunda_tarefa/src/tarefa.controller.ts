import { Body, Controller, Get, Put, Param, Delete } from "@nestjs/common"
import { ok } from "assert";

@Controller()
export class TarefaController{

    tarefaLista = [];

    @Get("/tarefa")
    lestaTarefa(){
        return this.tarefaLista;
    }

    @Put("/tarefa")
    salvarTarefa(@Body() tarefa){
        let index = this.tarefaLista.findIndex(t => t.codigo == tarefa.codigo);
        if (index >= 0) {
            this.tarefaLista[index].descricao = tarefa.descricao
        } else {
            tarefa.codigo = Math.random().toString(36);
            this.tarefaLista.push(tarefa);
        }
        console.log('tarefa ', this.tarefaLista);
        return "ok";
    }

    @Get("/tarefa/:codigo")
    buscarPorCod(@Param() parametro){
        console.log(parametro.codigo)
        let tarefa = this.tarefaLista.find(tarefa => tarefa.codigo == parametro.codigo);
        return tarefa;
    }

    @Delete("/tarefa/:codigo")
    excluirTarefa(@Param() parametro){
        let index = this.tarefaLista.findIndex(tarefa => tarefa.codigo == parametro.codigo);
        this.tarefaLista.splice(index, 1);
        return "ok";
    }
}