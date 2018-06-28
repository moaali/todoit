const handleRead = (tasksContainer, meta) => (request, response) => {
  const length = parseInt(request.params.length, 10);
  const offset = parseInt(request.params.offset, 10);
  const tasksWrapper = {
    tasks: tasksContainer.tasks.slice(offset, offset + length),
  };

  return response.status(200).json({
    tasksWrapper,
    meta,
  });
};

export default handleRead;
