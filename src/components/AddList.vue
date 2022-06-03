<template>
    <div class="bg-secondary py-5">
        <h2 class="text-light">This is a todo</h2>
        <div class="d-flex justify-content-center">
            <input class="ps-3" type="text" placeholder="type the todo" v-model="inputValue">
            <button type="button" ref="addButton" class="btn btn-primary rounded-0" @click="addTodo(text)">add</button>
        </div>
    </div>
</template> 

<script>
export default{
    emits: ['add-todo'],
data(){
    return{
        inputValue: ''
    }
},
methods: {
    addTodo(text){
        this.$emit('add-todo', text = this.inputValue)
    }
},
mounted(){
    this.$refs.addButton.style.background = 'purple'
}
}
</script>

 