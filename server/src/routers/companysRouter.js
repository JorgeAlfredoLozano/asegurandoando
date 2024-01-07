import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import createCompanyHandler from '../handlers/companysHandlers/createCompanyHandler.js';
import getAllCompanysHandler from '../handlers/companysHandlers/getAllCompanysHandler.js';
import getCompanyHandler from '../handlers/companysHandlers/getCompanyHandler.js';
import updateCompanyHandler from '../handlers/companysHandlers/updateAseguradoHandler.js';

const companysRouter = Router();

companysRouter.post('/', createCompanyHandler);
companysRouter.get('/all', buildQueryMiddleware, getAllCompanysHandler);
companysRouter.get('/', buildQueryMiddleware, getCompanyHandler);
companysRouter.put('/', buildQueryMiddleware, updateCompanyHandler);

export default companysRouter;
