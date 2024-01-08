import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import CRUDController from '../controllers/CRUDController.js';
import PolizasManager from '../dao/managerPolizas.js';

const polizasRouter = Router();
const polizaManager = new PolizasManager();

const successObj = {
    create: 'Póliza de seguro creada correctamente!',
    getOne: 'Póliza de seguro encontrada exitosamente!',
    getAll: 'Se han encontrado las siguientes pólizas de seguros!',
    updtate: 'La actualización de datos fue exitosa!',
    delete: 'Se eliminó la póliza de seguro correctamente',
};
const genericControllerPolizas = new CRUDController(polizaManager, successObj);

polizasRouter.post('/', genericControllerPolizas.create);
polizasRouter.get('/all', buildQueryMiddleware, genericControllerPolizas.getAll);
polizasRouter.get('/', buildQueryMiddleware, genericControllerPolizas.getOne);
polizasRouter.put('/', buildQueryMiddleware, genericControllerPolizas.update);
polizasRouter.delete('/', buildQueryMiddleware, genericControllerPolizas.delete);

export default polizasRouter;
