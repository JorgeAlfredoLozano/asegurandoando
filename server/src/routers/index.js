import { Router } from 'express';
import aseguradosRouter from './aseguradosRouter.js';
import companysRouter from './companysRouter.js';
import polizasRouter from './polizasRouter.js';
import bienesRouter from './bienesRouter.js';

const indexRouter = Router();

indexRouter.use('/asegurados', aseguradosRouter);
indexRouter.use('/companys', companysRouter);
indexRouter.use('/polizas', polizasRouter);
indexRouter.use('/bienes', bienesRouter);

export default indexRouter;
