import express from 'express';
import cors from 'cors';
import logger from 'morgan';

import manifest from '../../manifest';

const setup = () => {
  const app = express();

  // Middlewares setup
  app.use(cors())
  app.use(logger('tiny'))
  app.use(express.static(manifest.client))

  return app;
};

export default setup;
