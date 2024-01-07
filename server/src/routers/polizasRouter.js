import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import CRUDController from '../controllers/CRUDController.js';
import PolizasManager from '../dao/managerPolizas.js';

const polizasRouter = Router();
const polizaManager = new PolizasManager();

const genericControllerPolizas = new CRUDController(polizaManager, 'Póliza creada correctamente');

polizasRouter.post('/', genericControllerPolizas.create);
polizasRouter.get('/all', buildQueryMiddleware, genericControllerPolizas.getAll);
polizasRouter.get('/', buildQueryMiddleware, genericControllerPolizas.getOne);
polizasRouter.put('/', buildQueryMiddleware, genericControllerPolizas.update);

export default polizasRouter;