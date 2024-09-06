import express from 'express';
import { typeController } from './type.controller';
const route = express.Router();

route.post('/', typeController.createTypes);
route.get('/', typeController.retrieveAllTypes);
route.put('/:id', typeController.updateTypes);
route.delete('/:id', typeController.deleteTypes);

export const typesRoute = route;
