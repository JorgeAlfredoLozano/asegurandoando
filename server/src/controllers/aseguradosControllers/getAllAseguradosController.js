import AseguradosManager from '../../dao/managerAsegurados.js';

const aseguradomanager = new AseguradosManager();

async function getAllAseguradosController(query = {}) {
	try {
		const asegurados = await aseguradomanager.getAllAsegurados(query);
		if (!asegurados) {
			throw new Error('No hay asegurados para mostrar.');
		}
		return {
			data: asegurados,
			status: 0,
			message: 'Se han encontrado los siguientes asegurados',
		};
	} catch (error) {
		return {
			data: {},
			status: 1,
			message: error.message,
		};
	}
}

export default getAllAseguradosController;
