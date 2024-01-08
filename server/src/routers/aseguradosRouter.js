/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import CRUDController from '../controllers/CRUDController.js';
import AseguradosManager from '../dao/managerAsegurados.js';

const aseguradosRouter = Router();
const aseguradoManager = new AseguradosManager();

const successObj = {
    create: 'Asegurado creado correctamente!',
    getOne: 'Asegurado encontrado exitosamente!',
    getAll: 'Se han encontrado los siguientes asegurados!',
    updtate: 'La actualización de datos fue exitosa!',
    delete: 'Se eliminó el asegurado correctamente',
}
const genericControllerAsegurados = new CRUDController(aseguradoManager, successObj); 

aseguradosRouter.post('/', genericControllerAsegurados.create);
aseguradosRouter.get('/all', buildQueryMiddleware, genericControllerAsegurados.getAll);
aseguradosRouter.get('/', buildQueryMiddleware, genericControllerAsegurados.getOne);
aseguradosRouter.put('/', buildQueryMiddleware, genericControllerAsegurados.update);
aseguradosRouter.delete('/', buildQueryMiddleware, genericControllerAsegurados.delete);

export default aseguradosRouter;