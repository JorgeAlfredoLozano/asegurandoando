/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
// import createBienHandler from '../handlers/bienesHandlers/createBienHandler.js';
// import getAllBienesHandler from '../handlers/bienesHandlers/getAllBienesHandler.js';
// import getBienHandler from '../handlers/bienesHandlers/getBienHandler.js';
import HandlerGeneric from '../handlers/genericHandler.js';
import BienesManager from '../dao/managerBienes.js';

const bienesRouter = Router();
const bienManager = new BienesManager();

const createHandlerBienes = new HandlerGeneric(bienManager, 'Bien creado correctamente');
const handleCreateBienes = async (req, res) => {
	await createHandlerBienes.handleCreate(req, res);
};

const getOneHandlerBien = new HandlerGeneric(bienManager, 'El bien se ha encontrado correctamente');
const handleGetOneBien = async (req, res) => {
	await getOneHandlerBien.handleGetOne(req, res);
};

const getAllHandlerBienes = new HandlerGeneric(bienManager, 'Se encontraron los siguientes bienes.');
const handleGetAllBienes = async (req, res) => {
	await getAllHandlerBienes.handleGetAll(req, res);
};

const updateHandlerBienes = new HandlerGeneric(bienManager, 'Se han actualizado los datos correctamente.');
const handleUpdateBienes = async (req, res) => {
	await updateHandlerBienes.handleUpdate(req, res);
};

// bienesRouter.post('/', createBienHandler);
bienesRouter.post('/', handleCreateBienes);
bienesRouter.get('/all', buildQueryMiddleware, handleGetAllBienes);
bienesRouter.get('/', buildQueryMiddleware, handleGetOneBien);
bienesRouter.put('/', buildQueryMiddleware, handleUpdateBienes);

export default bienesRouter;
