/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import CRUDController from '../controllers/CRUDController.js';
import CompanysManager from '../dao/managerCompanys.js';

const companysRouter = Router();
const companyManager = new CompanysManager();

const genericControllerCompanys = new CRUDController(companyManager, 'Compañía de seguros creada correctamente');

companysRouter.post('/', async (req, res) => {
	await genericControllerCompanys.create(req, res);
});

companysRouter.get('/all', buildQueryMiddleware, async (req, res) => {
	await genericControllerCompanys.getAll(req, res);
});

companysRouter.get('/', buildQueryMiddleware, async (req, res) => {
	await genericControllerCompanys.getOne(req, res);
});

companysRouter.put('/', buildQueryMiddleware, async (req, res) => {
	await genericControllerCompanys.update(req, res);
});

export default companysRouter;
