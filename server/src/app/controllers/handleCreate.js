import { save } from '../utils';

const handleCreate = (tasksContainer, meta) => (request, response) => {
  const { id, title, description, date, completed } = request.params;

  if (id && title && description && date && completed ) {
    const todo = {
      id,
      title,
      description,
      date,
      completed: completed === 'true',
    };

    // Add new todo in `tasksContainer`.
    tasksContainer.tasks.unshift(todo);

    // Write the new `tasksContainer` to JSON file.
    save(tasksContainer);

    // Update meta info.
    meta.increment('all');
    if (todo.completed) {
      meta.increment('completed')
    } else {
      meta.increment('pending');
    }

    return response.status(201).json({
      message: 'Resource created',
      meta,
    })
  }

  return response.status(400).json({
    message: 'Bad request',
  })
}

export default handleCreate;
