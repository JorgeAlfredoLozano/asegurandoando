import BienesManager from '../../dao/managerBienes.js';

const bienmanager = new BienesManager();

async function getBienController(query) {
	try {
		const bien = await bienmanager.getOneBien(query);
		if (!bien) {
			throw new Error('El bien no existe!.');
		}
		return {
			data: bien,
			status: 0,
			message: 'Bien encontrado exitosamente!.',
		};
	} catch (error) {
		return {
			data: {},
			status: 1,
			message: error.message,
		};
	}
}

export default getBienController;
