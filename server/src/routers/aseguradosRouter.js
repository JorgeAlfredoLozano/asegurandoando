/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import CRUDController from '../controllers/CRUDController.js';
import AseguradosManager from '../dao/managerAsegurados.js';

const aseguradosRouter = Router();
const aseguradoManager = new AseguradosManager();

// tengo que crear un objeto con mensajes para todo el CRUD
const genericControllerAsegurados = new CRUDController(aseguradoManager, 'Bien creado correctamente'); 

aseguradosRouter.post('/', genericControllerAsegurados.create);
aseguradosRouter.get('/all', buildQueryMiddleware, genericControllerAsegurados.getAll);
aseguradosRouter.get('/', buildQueryMiddleware, genericControllerAsegurados.getOne);
aseguradosRouter.put('/', buildQueryMiddleware, genericControllerAsegurados.update);


export default aseguradosRouter;