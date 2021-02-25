import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const tasksRef = db.collection('tasks')

const state = () => ({
  tasks: [],
})

const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('tasks', tasksRef)
  }),
  add: firestoreAction((context, name) => {
    if (name.trim()) {
      tasksRef.add({
        name,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    tasksRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, task) => {
    tasksRef.doc(task.id).update({
      done: !task.done,
    })
  }),
}

export default {
  namespaced: true,
  state,
  actions,
}
