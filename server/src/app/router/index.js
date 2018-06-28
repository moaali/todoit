import path from 'path';
import {
  handleCreate,
  handleRead,
  handleUpdate,
  handleDelete,
} from '../controllers';
import manifest from '../../../manifest';

const routes = {
  getTasks: '/tasks/:length/:offset',
  postTask: '/tasks/create/:id/:title/:description/:date/:completed',
  putTask: '/task/update/:id/:title/:description/:completed',
  deleteTask: '/task/delete/:id',
};

const router = ({tasksContainer, app, meta}) => {
  app.get(routes.getTasks, handleRead(tasksContainer, meta));
  app.post(routes.postTask, handleCreate(tasksContainer, meta));
  app.put(routes.putTask, handleUpdate(tasksContainer, meta));
  app.delete(routes.deleteTask, handleDelete(tasksContainer, meta));

  app.get('*', (request, response) => {
    response.sendFile(path.join(manifest.client, 'index.html'))
  });
};

export default router;
