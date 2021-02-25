<template>
  <div>
    <input v-model="name" />
    <button @click="add">add task</button>
    <ul>
      <li v-for="task of tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      name: '',
      done: false,
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks.tasks
    },
  },
  created() {
    this.$store.dispatch('tasks/init')
  },
  methods: {
    add() {
      this.$store.dispatch('tasks/add', this.name)
      this.name = ''
    },
  },
})
</script>
