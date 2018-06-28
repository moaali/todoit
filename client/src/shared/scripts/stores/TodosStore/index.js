import { observable, action, flow } from 'mobx'
import axios from 'axios';
import uuid from 'uuid/v4';
import { pull } from 'lodash';

import { fetchTodos } from 'services'

class TodosStore {
  @observable activeCategory = 'all'
  @observable todos = []
  @observable displayedTodos = []
  @observable shownTodo = null

  @observable requestStatus = 'success'

  loadChunkSize = 10
  currentOffset = 0

  @observable meta = {
    all: 0,
    pending: 0,
    completed: 0,
  }

  @observable filters = {
    completed: null,
    category: 'all',
    query: '',
  }

  constructor() {
    // Intial todos loading
    this.loadTodos();
  }

  loadTodos = flow(function * handleFetch() {
    this.requestStatus = 'pending';

    try {
      const {
        tasksWrapper,
        meta,
      } = yield fetchTodos(this.loadChunkSize, this.currentOffset);

      this.currentOffset += this.loadChunkSize;
      this.meta = { ...meta };
      this.todos.push(...tasksWrapper.tasks);
      this.displayedTodos = this.applyFilters(this.filters, this.todos);
      this.requestStatus = 'success';
    } catch (error) {
      this.requestStatus = 'error';
    }
  })

  @action
  createTodo = userTodo => {
    const { title, description } = userTodo;
    const id = uuid();
    const completed = false;
    const creationDate = new Date();
    const formattedDate = creationDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const todo = {
      id,
      title,
      description,
      date: formattedDate,
      completed,
    };

    this.requestStatus = 'pending';

    axios
      .post(`/tasks/create/${id}/${title}/${description}/${formattedDate}/${completed}`)
      .then(response => {
        this.requestStatus = 'success';

        // Update meta.
        this.meta = {
          ...response.data.meta,
        };

        // Create local todo.
        this.save(todo);
      })
      .catch(() => {
        this.requestStatus = 'error';
      });
  }

  @action
  updateTodo = todo => {
    const { id, title, description, completed } = todo;

    this.requestStatus = 'pending';

    axios
      .put(`/task/update/${id}/${title}/${description}/${completed}`)
      .then(response => {
        this.requestStatus = 'success';

        // Update meta.
        this.meta = {
          ...response.data.meta,
        };

        // Update local todo
        this.save(todo)
      })
      .catch(() => {
        this.requestStatus = 'error';
      });
  }

  @action
  deleteTodo = id => {
    this.requestStatus = 'pending';

    axios
      .delete(`/task/delete/${id}`)
      .then(response => {
        this.requestStatus = 'success';

        // Update meta.
        this.meta = {
          ...response.data.meta,
        };

        // Delete local todo
        const targetTodo = this.findById(id);

        pull(this.todos, targetTodo);

        this.displayedTodos = this.applyFilters(this.filters, this.todos);
      })
      .catch(() => {
        this.requestStatus = 'error';
      });
  }

  @action
  viewTodo = id => {
    this.shownTodo = this.todos.find(todo => todo.id === id);
  }

  @action
  save = todo => {
    const targetTodoIndex = this.todos.findIndex(item => todo.id === item.id);

    if (targetTodoIndex > -1) {
      this.todos[targetTodoIndex] = {...todo};
    } else {
      this.todos.unshift(todo);
    }

    this.displayedTodos = this.applyFilters(this.filters, this.todos);
  }

  @action
  switchCategory = category => {
    this.filters.category = category;
    this.activeCategory = category;

    this.displayedTodos = this.applyFilters(this.filters, this.todos);
  }

  @action
  fuzzyfind = query => {
    this.filters.query = query;
    this.displayedTodos = this.applyFilters(this.filters, this.todos);
  }

  @action
  toggleCompleted = completed => {
    this.filters.completed = completed;
    this.displayedTodos = this.applyFilters(this.filters, this.todos);
  }

  findById = id => this.todos.find(item => item.id === id)

  filterByQuery = (query, todos) => todos.filter(
    todo => (
      todo.title.includes(query.toLowerCase()) ||
      todo.description.includes(query.toLowerCase())
    )
  )

  filterByCompleted = (completed, todos) => {
    if (completed === null) return todos;

    return todos.filter(todo => todo.completed === completed);
  }

  filterByCategory = (category, todos) => {
    if (category === 'all') return todos;

    if (category === 'completed')
      return this.filterByCompleted(true, todos);

    return this.filterByCompleted(false, todos);
  }

  applyFilters = (filters, todos) => (
    this.filterByQuery(filters.query, todos)
      |> (_ => this.filterByCompleted(filters.completed, _))
      |> (_ => this.filterByCategory(filters.category, _))
  )
}

export default new TodosStore();
