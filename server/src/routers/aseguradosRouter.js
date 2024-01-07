import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
// import createAseguradoHandler from '../handlers/aseguradosHandlers/createAseguradoHandler.js';
// import getAseguradoHandler from '../handlers/aseguradosHandlers/getAseguradoHandler.js';
// import getAllAseguradosHandler from '../handlers/aseguradosHandlers/getAllAseguradosHandler.js';
// import updateAseguradoHandler from '../handlers/aseguradosHandlers/updateAseguradoHandler.js';
import GenericHandler from '../handlers/genericHandler.js';
import AseguradosManager from '../dao/managerAsegurados.js';

const aseguradosRouter = Router();
const aseguradoManager = new AseguradosManager();

const createGenericHandlerAsegurados = new GenericHandler(
	aseguradoManager,
	'Asegurado creado correctamente'
);
const handleCreateAsegurado = async (req, res) => {
	await createGenericHandlerAsegurados.handleCreate(req, res);
};

aseguradosRouter.post('/', handleCreateAsegurado);

// aseguradosRouter.post('/', createAseguradoHandler);
// aseguradosRouter.get('/all', buildQueryMiddleware, getAllAseguradosHandler);
// aseguradosRouter.get('/', buildQueryMiddleware, getAseguradoHandler);
// aseguradosRouter.put('/', buildQueryMiddleware, updateAseguradoHandler);

export default aseguradosRouter;
