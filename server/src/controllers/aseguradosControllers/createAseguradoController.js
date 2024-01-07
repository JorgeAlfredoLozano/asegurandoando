import AseguradosManager from '../../dao/managerAsegurados.js';
const aseguradomanager = new AseguradosManager();

const createAseguradoController = async data => {
	try {
		const newAsegurado = await aseguradomanager.createAsegurado(data);
		return {
			data: newAsegurado,
			status: 0,
			message: 'Asegurado creado correctamente',
		};
	} catch (error) {
		return {
			data: {},
			status: 1,
			message: error.message,
		};
	}
};

export default createAseguradoController;
