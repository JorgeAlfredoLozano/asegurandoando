import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import CRUDController from '../controllers/CRUDController.js';
import CompanysManager from '../dao/managerCompanys.js';

const companysRouter = Router();
const companyManager = new CompanysManager();

const genericControllerCompanys = new CRUDController(
	companyManager,
	'Compañía de seguros creada correctamente'
);

companysRouter.post('/', genericControllerCompanys.create);
companysRouter.get('/all', buildQueryMiddleware, genericControllerCompanys.getAll);
companysRouter.get('/', buildQueryMiddleware, genericControllerCompanys.getOne);
companysRouter.put('/', buildQueryMiddleware, genericControllerCompanys.update);

export default companysRouter;
