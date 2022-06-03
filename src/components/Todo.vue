<template>
    <div class="d-flex justify-content-between p-4 border border-1 rounded mt-4"
    v-for="{ text , key } in todoItems">
    <div  v-if="editMode === false">
        <p>{{ text }}</p>
        <div class="d-flex">
            <button class="btn btn-success" @click="enableText(text)">
                edit
            </button>
            <button class="btn btn-danger ms-3" @click="deleteTodo(key)">
                delete
            </button>
        </div>
    </div>
    <div v-if="editMode === true">
         <input type="text" v-model="textMode">
         <div class="d-flex">
             <button class="btn btn-success" @click="editTodo(key, text)">
                 edit
             </button>
         </div>
     </div>
    </div>
</template>

<script>
export default{
    emits: ['delete-todo', 'edit-todo'],
    props: { 
        todoItems: {
            type: Array,
            required: true
        }
        },
    data() {
        return{
            editMode: false,
            textMode: ''
        }
    },
    methods: {
        deleteTodo(key){
            this.$emit('delete-todo', key)
        },
        enableText(text){
            this.editMode = true
            this.textMode = text
        }, 
        editTodo(key){
            this.editMode = false
            this.$emit('edit-todo',{ key: key , text: this.textMode})
            this.textMode = ''
        }
    }
}
</script>