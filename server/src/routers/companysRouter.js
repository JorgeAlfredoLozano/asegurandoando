import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import CRUDController from '../controllers/CRUDController.js';
import CompanysManager from '../dao/managerCompanys.js';

const companysRouter = Router();
const companyManager = new CompanysManager();

const successObj = {
	create: 'Compañía de seguros creada correctamente!',
	getOne: 'Compañía de seguros encontrada exitosamente!',
	getAll: 'Se han encontrado las siguientes compañías de seguros!',
	updtate: 'La actualización de datos fue exitosa!',
	delete: 'Se eliminó la compañía de seguros correctamente',
};
const genericControllerCompanys = new CRUDController(companyManager, successObj);

companysRouter.post('/', genericControllerCompanys.create);
companysRouter.get('/all', buildQueryMiddleware, genericControllerCompanys.getAll);
companysRouter.get('/', buildQueryMiddleware, genericControllerCompanys.getOne);
companysRouter.put('/', buildQueryMiddleware, genericControllerCompanys.update);
companysRouter.delete('/', buildQueryMiddleware, genericControllerCompanys.delete);

export default companysRouter;
