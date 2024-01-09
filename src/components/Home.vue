<template>
    <div class="container">
        <div class="d-flex align-items-center justify-content-center">
            <div class="centro col-md-8">
                <h1>Lista de tarefas</h1>
                <div class="col-md-8">
                    <input class="form-control" type="text" placeholder="Escreva a descriçao da tarefa">
                </div>
                <div>
                    <ul class="mt-3 list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Item 1
                            <div class="d-flex">
                                <button type="button" class="btn btn-primary  mr-2 mb-2">Botão 1</button>
                                <button type="button" class="btn btn-secondary ms-2 mb-2">Botão 2</button>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Item 2
                            <div class="d-flex">
                                <button type="button" class="btn btn-primary  mb-2">Botão 1</button>
                                <button type="button" class="btn btn-secondary ms-2 mb-2">Botão 2</button>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Item 3
                            <div class="d-flex">
                                <button type="button" class="btn btn-primary mb-2">Botão 1</button>
                                <button type="button" class="btn btn-secondary ms-2 mb-2">Botão 2</button>
                            </div>
                        </li>
                        <!-- Adicione mais itens conforme necessário -->
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

export default {
    name: 'HelloWorld',
}
</script>
<style >
.centro {
    padding: 10px;
    margin: 30px;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: rgba(0, 0, 0, 0.561);
    border-radius: 10px;
    width: 50%;
}
</style>
