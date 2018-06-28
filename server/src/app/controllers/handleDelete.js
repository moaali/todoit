import { save } from '../utils'

const handleDelete = (tasksContainer, meta) => (request, response) => {
  const { id } = request.params;

  const todoIndex = tasksContainer.tasks.findIndex(item => item.id === id);

  if (id) {
    if (todoIndex > -1) {
      const isCompleted = tasksContainer.tasks[todoIndex].completed;

      tasksContainer.tasks.splice(todoIndex, 1);

      // Write the new `tasksContainer` to JSON file.
      save(tasksContainer);

      // Update meta info.
      meta.decrement('all');

      if (isCompleted) {
        meta.decrement('completed');
      } else {
        meta.decrement('pending');
      }

      return response.status(200).json({
        message: 'Deleted successfully',
        meta,
      })
    }

    return response.status(404).json({
      message: 'Not found',
    })
  }

  return response.status(400).json({
    message: 'Bad requestuest',
  })
}

export default handleDelete;
