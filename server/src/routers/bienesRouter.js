import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import CRUDController from '../controllers/CRUDController.js';
import BienesManager from '../dao/managerBienes.js';

const bienesRouter = Router();
const bienManager = new BienesManager();

const successObj = {
	create: 'Bien creado correctamente!',
	getOne: 'Bien encontrado exitosamente!',
	getAll: 'Se han encontrado los siguientes bienes!',
	updtate: 'La actualización de datos fue exitosa!',
	delete: 'Se eliminó el bien correctamente',
};
const genericControllerBienes = new CRUDController(bienManager, successObj);

bienesRouter.post('/', genericControllerBienes.create);
bienesRouter.get('/all', buildQueryMiddleware, genericControllerBienes.getAll);
bienesRouter.get('/', buildQueryMiddleware, genericControllerBienes.getOne);
bienesRouter.put('/', buildQueryMiddleware, genericControllerBienes.update);
bienesRouter.delete('/', buildQueryMiddleware, genericControllerBienes.delete);

export default bienesRouter;
