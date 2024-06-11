/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { globalError } from './middleware/global.error';
import { notfoundError } from './middleware/not.found.error';
const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes

app.get('/', (req: Request, res: Response) => {
  res.send('Project setup home page');
});

// global error
app.use(globalError);

// notfound route handler
app.use(notfoundError);

export default app;
