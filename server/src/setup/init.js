import tasksContainer from '../app/model/tasks.json';
import manifest from '../../manifest';

class Meta {
  constructor(wrapper) {
    this.all = 0;
    this.pending = 0;
    this.completed = 0;

    this.count(wrapper);
  }

  count(wrapper) {
    const todos = wrapper.tasks;
    const todosSize = todos.length;

    this.all = todosSize;

    todos.forEach((todo, index) => {
      if (!todo.completed) this.pending += 1;

      if (index === todosSize - 1) {
        this.completed = todosSize - this.pending;
      }
    });
  }

  increment(prop) {
    this[prop] += 1
  }

  decrement(prop) {
    this[prop] -= 1
  }
}

const init = () => ({
  port: manifest.port,
  tasks: tasksContainer,
  meta: new Meta(tasksContainer),
});

export default init;


