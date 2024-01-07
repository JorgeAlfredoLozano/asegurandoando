import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import CRUDController from '../controllers/CRUDController.js';
import BienesManager from '../dao/managerBienes.js';

const bienesRouter = Router();
const bienManager = new BienesManager();

const genericControllerBienes = new CRUDController(bienManager, 'Bien creado correctamente');

bienesRouter.post('/', genericControllerBienes.create);
bienesRouter.get('/all', buildQueryMiddleware, genericControllerBienes.getAll);
bienesRouter.get('/', buildQueryMiddleware, genericControllerBienes.getOne);
bienesRouter.put('/', buildQueryMiddleware, genericControllerBienes.update);

export default bienesRouter;
