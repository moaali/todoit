/**
 * Fetch todos from the server using the specified length and offset.
 *
 * @param  {Number} length Number of todos to load.
 * @param  {Number} offset Position to start loading at.
 *
 * @return {Object}        JSON response.
 */
const fetchTodos = async (length, offset) => {
  const response = await fetch(`/tasks/${length}/${offset}`);
  const body = await response.json();

  return body;
};

export default fetchTodos;
