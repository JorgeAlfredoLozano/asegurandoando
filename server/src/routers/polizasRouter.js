import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import createPolizaHandler from '../handlers/polizasHandlers/createPolizaHandler.js';
import getAllPolizasHandler from '../handlers/polizasHandlers/getAllPolizasHandler.js';
import getPolizaHandler from '../handlers/polizasHandlers/getPolizaHandler.js';
import updatePolizaHandler from '../handlers/polizasHandlers/updatePolizaHandler.js';

const polizasRouter = Router();

polizasRouter.post('/', createPolizaHandler);
polizasRouter.get('/all', buildQueryMiddleware, getAllPolizasHandler);
polizasRouter.get('/', buildQueryMiddleware, getPolizaHandler);
polizasRouter.put('/', buildQueryMiddleware, updatePolizaHandler);

export default polizasRouter;
