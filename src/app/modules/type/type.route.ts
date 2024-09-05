import express from 'express';
const route = express.Router();

route.post('/');
route.get('/');
route.get('/:id');
route.put('/:id');
route.delete('/:id');

export const typesRoute = route;
