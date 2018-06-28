import { save } from '../utils'

const handleUpdate = (tasksContainer, meta) => (request, response) => {
  const { id, title, description, completed } = request.params;

  if (id && title && description && completed) {
    const targetTodoIndex = tasksContainer.tasks.findIndex(item => item.id === id);

    if (targetTodoIndex > -1) {
      const targetTodo = tasksContainer.tasks[targetTodoIndex];

      // Update meta info.
      if (targetTodo.completed !== (completed === 'true')) {
        if (targetTodo.completed) {
          meta.increment('completed');
          meta.decrement('pending');
        } else {
          meta.decrement('completed');
          meta.increment('pending');
        }
      }

      targetTodo.id = id;
      targetTodo.title = title;
      targetTodo.description = description;
      targetTodo.completed = completed === 'true';

      // Write the new `tasksContainer` to JSON file.
      save(tasksContainer);

      return response.status(200).json({
        message: 'Updated succefully',
        meta,
      });
    }

    return response.status(404).json({
      message: 'Not found',
    })
  }

  return response.status(400).json({
    message: 'Bad request',
  })
}

export default handleUpdate;
