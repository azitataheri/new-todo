<template>
<div class="row">
    <AddList @add-todo="todoAdder"></AddList>
</div>
<div class="col-md-5 offset-md-3 mt-4">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
         class="nav-link"
          type="button"
         :class="{'active': currentTab == title}"
          @click="currentTab = title"
          v-for="{ title } in items"
          >{{ title }}</button>
      </div>
    </nav>
    <div class="tab-content">
      <div 
      class="tab-pane fade show active"
       v-for="{ title } in items"
       v-show="currentTab == title"
       >
       <Todo :todoItems="todos" @delete-todo="todoDeleter" @edit-todo="todoEditor"></Todo>
       </div>
    </div>
</div>
</template>
<script>
import AddList from '../components/AddList.vue'
import Todo from '../components/Todo.vue'
import todoApi from '../api/todos'

export default{
  props: {
    items: {
      type: Array,
      required: true
    }
    },
    components: {
        AddList,
        Todo
    },
  data(){
      return{
          currentTab: 'Home',
          todos: [
          ]
      }
  },
  created(){
  todoApi.get('/todos.json')
  .then( ({data}) => {
     let todos = Object.entries(data).map(([key, val]) => {
       return {
         key,
         ...val
       }
     })
      this.todos = todos
  })
  .catch( err => console.log(err))
  },
  methods: {
    todoAdder(text){
      let todo = {
        text
      }
      todoApi.post('/todos.json', todo)
      .then(res => 
           this.todos.push({
             ...todo,
            key: res.data.name
        })
      )
      .catch(err => console.log(err))
    },
    todoDeleter(key){
      todoApi.delete(`/todos/${key}.json`)
      .then(res => {
        console.log(res);
        this.todos = this.todos.filter( item => item.key !== key)
      })
      .catch(err => console.log(err))
    },
    todoEditor({ key }){
    console.log( key );
      this.todos.map( item => {
        if( item.key === key){
          return {
           ...item           
          }
        }
        return item
      })
    }
  }
}
</script>