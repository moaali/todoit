import { express, init } from './setup';
import router from './app/router';

const { meta, tasks, port } = init();
const app = express();

router({
  tasksContainer: tasks,
  meta,
  app,
})

app.listen(port, () => {
  process.stdout.write(`the server is available on http://localhost:${port}/\n`);
});
