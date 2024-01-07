/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import CRUDController from '../controllers/CRUDController.js';
import PolizasManager from '../dao/managerPolizas.js';

const polizasRouter = Router();
const polizaManager = new PolizasManager();

const genericControllerPolizas = new CRUDController(polizaManager, 'Póliza creada correctamente');

polizasRouter.post('/', async (req, res) => {
	await genericControllerPolizas.create(req, res);
});

polizasRouter.get('/all', buildQueryMiddleware, async (req, res) => {
	await genericControllerPolizas.getAll(req, res);
});

polizasRouter.get('/', buildQueryMiddleware, async (req, res) => {
	await genericControllerPolizas.getOne(req, res);
});

polizasRouter.put('/', buildQueryMiddleware, async (req, res) => {
	await genericControllerPolizas.update(req, res);
});

export default polizasRouter;