/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import CRUDController from '../controllers/CRUDController.js';
import BienesManager from '../dao/managerBienes.js';

const bienesRouter = Router();
const bienManager = new BienesManager();

const genericControllerBienes = new CRUDController(bienManager, 'Bien creado correctamente');

bienesRouter.post('/', async (req, res) => {
	await genericControllerBienes.create(req, res);
});

bienesRouter.get('/all', buildQueryMiddleware, async (req, res) => {
	await genericControllerBienes.getAll(req, res);
});

bienesRouter.get('/', buildQueryMiddleware, async (req, res) => {
	await genericControllerBienes.getOne(req, res);
});

bienesRouter.put('/', buildQueryMiddleware, async (req, res) => {
	await genericControllerBienes.update(req, res);
});

export default bienesRouter;
