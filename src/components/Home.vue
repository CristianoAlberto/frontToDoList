<template>
    <div class="container">
        <div class="d-flex align-items-center justify-content-center">
            <div class="centro col-md-8">
                <h1>Lista de tarefas</h1>
                <div class="input-group">
                    <input class=" mt-3 form-control" type="text" placeholder="Escreva a descrição da tarefa">
                    <div class="input-group-append">
                        <button class="mt-3 ms-3 btn btn-primary" type="button">Adcionar</button>
                    </div>
                </div>
                <div>
                    <ul class="mt-3 list-group">
                        <li v-for="item in data" :key="item.id"
                            class="list-group-item d-flex justify-content-between align-items-center custom-list-item">
                            {{ item.taskName }}
                            <div class="d-flex">
                                <button @click="editarItem(item)" type="button"
                                    class="btn btn-primary mr-2 mb-2">Editar</button>
                                <button @click="eliminarItem(item)" type="button"
                                    class="btn btn-danger ms-3 mb-2">Eliminar</button>
                                <button @click="marcarComoFeito(item)" type="button"
                                    class="btn btn-success ms-3 mb-2">Feito</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'HelloWorld',
    data() {
        return {
            taskId: 0,
            taskName: '',
            taskStatus: false,
            data: [],
            dataSend: []
        }
    },

    mounted() {
        this.fetchData();
    },

    methods: {
        async fetchData() {
            try {
                const response = await this.axios.get('api/ToDoList/');
                console.log(response.data);
                this.data = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    }

}
</script>
<style >
.centro {
    padding: 40px;
    margin: 30px;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: rgba(0, 0, 0, 0.561);
    border-radius: 10px;
    width: 65%;
}

.custom-list-item {
    background-color: rgba(0, 0, 0, 0.283);
    border: none;
    color: white;
    margin-top: 15px;
    border-radius: 10px;
    padding: 15px;
}
</style>
