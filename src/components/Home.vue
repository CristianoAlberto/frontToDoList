<template>
    <div class="container-fluid">
        <div class="d-flex flex-column align-items-center justify-content-center">
            <div class="centro col-md-8 col-12">
                <h1 class="text-center">Lista de tarefas</h1>
                <div class="input-group">
                    <input class="mt-3 form-control" type="text" v-model="taskNameInput"
                        placeholder="Escreva a descrição da tarefa">
                    <div class="input-group-append">
                        <button @click="create()" class="mt-3 btn btn-primary btn-block" type="button">Adicionar</button>
                    </div>
                </div>
                <div>
                    <ul v-if="isRequestComplete" class="mt-3 list-group">
                        <li v-for="item in data" :key="item.id"
                            class="list-group-item d-flex justify-content-between align-items-center custom-list-item">
                            <div class="col-8">{{ item.taskName }}</div>
                            <div class="col-4 d-flex justify-content-end">
                                <!-- Dropdown para telas pequenas -->
                                <div class="d-md-none btn-group">
                                    <button type="button" class="btn btn-secondary dropdown-toggle"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Ações
                                    </button>
                                    <div class="dropdown-menu">
                                        <button @click="getItemById(item.id)" data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop" type="button"
                                            class="dropdown-item">Editar</button>
                                        <button @click="deleteItem(item.id)" type="button"
                                            class="dropdown-item">Eliminar</button>
                                        <button @click="markHowDone(item.id)" type="button"
                                            class="dropdown-item">Feito</button>
                                    </div>
                                </div>
                                <!-- Botões individuais para telas médias e grandes -->
                                <div class="d-none d-md-flex">
                                    <button @click="getItemById(item.id)" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop" type="button"
                                        class="btn btn-primary">Editar</button>
                                    <button @click="deleteItem(item.id)" type="button"
                                        class="btn btn-danger ms-2">Eliminar</button>
                                    <button @click="markHowDone(item.id)" type="button"
                                        class="btn btn-success ms-2">Feito</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div v-else class="text-center mt-3">
                        Carregando...
                    </div>
                </div>
            </div>
        </div>
    </div>



    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Editar tarefa</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="text" v-model="taskName" class="form-control" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button @click="editItem(taskId)" type="button" data-bs-dismiss="modal"
                        class="btn btn-primary">Salvar</button>
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
            taskNameInput: '',
            data: [{}],
            showModal: true,
            isRequestComplete: false,
        }
    },

    mounted() {
        this.fetchData();
    },

    methods: {
        async fetchData() {
            await this.axios.get('api/ToDoList/', {
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                }
            }).then(response => {
                this.data = response.data
                this.isRequestComplete = true;
            }).catch(error => {
                console.log(error);
            })
        },

        async create() {
            try {
                const response = await this.axios.post(`api/ToDoList/`,
                    {
                        taskName: this.taskNameInput,
                        status: false
                    }, {
                    headers: {
                        'ngrok-skip-browser-warning': 'true',
                    }
                });
                this.taskNameInput = "";
                this.fetchData();
            } catch (error) {
                console.log(error);
            }
        },

        async getItemById(id) {
            try {
                const task = this.data.filter((data) => data.id == id);
                this.taskName = task[0].taskName;
                this.taskId = task[0].id;
            } catch (error) {
                console.log(error);
            }
        },

        async editItem(id) {
            try {
                const response = await this.axios.put(`api/ToDoList/${id}`,
                    {
                        taskName: this.taskName,
                        status: false
                    },
                    {
                        headers: {
                            'ngrok-skip-browser-warning': 'true',
                        }
                    });
                this.fetchData();
            } catch (error) {
                console.log(error);
            }
        },

        async deleteItem(id) {
            try {
                const response = await this.axios.delete(`api/ToDoList/${id}`, {
                    headers: {
                        'ngrok-skip-browser-warning': 'true',
                    }
                });
                this.fetchData();
            } catch (error) {
                console.log(error);
            }
        },

        async markHowDone(id) {
            try {
                const task = this.data.filter((data) => data.id == id);
                const response = await this.axios.put(`api/ToDoList/${id}`,
                    {
                        taskName: task[0].taskName,
                        status: true
                    },
                    {
                        headers: {
                            'ngrok-skip-browser-warning': 'true',
                        }
                    },);
                this.fetchData();
            } catch (error) {
                console.log(error);
            }
        }
    },
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
    max-width: 100%;
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
