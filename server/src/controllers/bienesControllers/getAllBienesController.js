import BienesManager from '../../dao/managerBienes.js';

const bienmanager = new BienesManager();

async function getAllBienesController(query = {}) {
	try {
		const bienes = await bienmanager.getAllBienes(query);
		if (!bienes) {
			throw new Error('No hay bienes para mostrar.');
		}
		return {
			data: bienes,
			status: 0,
			message: 'Se han encontrado los siguientes bienes',
		};
	} catch (error) {
		return {
			data: {},
			status: 1,
			message: error.message,
		};
	}
}

export default getAllBienesController;
