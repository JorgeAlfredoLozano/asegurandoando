import PolizasManager from '../../dao/managerPolizas.js';

const polizamanager = new PolizasManager();

async function getAllPolizasController(query = {}) {
	try {
		const polizas = await polizamanager.getAllPolizas(query);
		if (!polizas) {
			throw new Error('No hay pólizas para mostrar.');
		}
		return {
			data: polizas,
			status: 0,
			message: 'Se han encontrado las siguientes pólizas',
		};
	} catch (error) {
		return {
			data: {},
			status: 1,
			message: error.message,
		};
	}
}

export default getAllPolizasController;
