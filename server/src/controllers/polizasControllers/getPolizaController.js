import PolizasManager from '../../dao/managerPolizas.js';

const polizamanager = new PolizasManager();

async function getPolizaController(query) {
	try {
		const User = await polizamanager.getOnePoliza(query);
		if (!User) {
			throw new Error('La póliza no existe!.');
		}
		return {
			data: User,
			status: 0,
			message: 'Póliza encontrada exitosamente!.',
		};
	} catch (error) {
		return {
			data: {},
			status: 1,
			message: error.message,
		};
	}
}

export default getPolizaController;
