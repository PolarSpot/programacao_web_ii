import {Controller, Get, Param, Put, Body} from "@nestjs/common";

@Controller()
export class TarefaController {

    tarefaList = [];

    @Get("/tarefa")
    listaTarefa() {
        console.log('this.tarefaList ', this.tarefaList);
        return this.tarefaList;
    }

    @Get("/tarefa/:id")
    apenasUmaTarefa(@Param() params) {
        console.log('params ', params.id)
        return {nome: 'Tarefa 02'};
    }

    @Put("tarefa")
    receberTarefa(@Body() tarefa){
        console.log('tarefa ', tarefa);
        tarefa.id = Math.random().toString(36);

        this.tarefaList.push(tarefa)
        return this.tarefaList;
    }
}