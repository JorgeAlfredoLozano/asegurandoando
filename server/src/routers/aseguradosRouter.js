/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import CRUDController from '../controllers/CRUDController.js';
import AseguradosManager from '../dao/managerAsegurados.js';

const aseguradosRouter = Router();
const aseguradoManager = new AseguradosManager();

const genericControllerAsegurados = new CRUDController(aseguradoManager, 'Bien creado correctamente');

aseguradosRouter.post('/', async (req, res) => {
	await genericControllerAsegurados.create(req, res);
});

aseguradosRouter.get('/all', buildQueryMiddleware, async (req, res) => {
	await genericControllerAsegurados.getAll(req, res);
});

aseguradosRouter.get('/', buildQueryMiddleware, async (req, res) => {
	await genericControllerAsegurados.getOne(req, res);
});

aseguradosRouter.put('/', buildQueryMiddleware, async (req, res) => {
	await genericControllerAsegurados.update(req, res);
});

export default aseguradosRouter;