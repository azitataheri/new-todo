<template>
<div class="container-fluid p-0 m-0">
    <div class="container">
        <div class="row">
          <NavTab :items="tabs"></NavTab>
        </div>
    </div>
</div>    
</template>


<script>
import NavTab from './components/NavTab.vue'
export default {
  components: {
    NavTab
  },
  data(){
    return{
     tabs: [
              {
                  title: 'Home',
                  content: 'one'
              },
              {
                  title: 'Profile',
                  content: 'two'
              },
              {
                  title: 'Contact',
                  content: 'three'
              }
          ],
      lists: []
    }
  }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
