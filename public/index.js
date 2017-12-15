/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to my Tasks",
      tasks: [
        { id: 1, text: "Take out Trash", complete: true },
        { id: 2, text: "Mow the Lawn", complete: true },
        { id: 3, text: "Wash Dishes", complete: false }
      ],
      newTaskId: "",
      newTaskText: "",
      newTaskComplete: false
    };
  },

  mounted: function() {},
  methods: {
    addTask: function() {
      if (this.newTaskText !== "") {
        var newTask = {
          id: this.newTaskId,
          text: this.newTaskText,
          complete: this.newTaskComplete
        };
        this.tasks.push(newTask);
      }
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }]
});

var app = new Vue({
  el: "#app",
  router: router
});
