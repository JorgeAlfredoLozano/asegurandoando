import PolizasManager from '../../dao/managerPolizas.js';

const polizamanager = new PolizasManager();

async function updatePolizaController(query, data) {
	try {
		if (Object.keys(query).length > 0) {
			const poliza = await polizamanager.updatePoliza(query, data);
			if (poliza.matchedCount > 0) {
				const polizaUp = await polizamanager.getOnePoliza(query);
				return {
					data: polizaUp,
					status: 0,
					message: 'La actualización de datos fue exitosa.',
				};
			} else {
				throw new Error('No se pudo realizar la actualización de datos.');
			}
		} else {
			throw new Error('Falta el criterio de busqueda para actualizar.');
		}
	} catch (error) {
		return {
			data: {},
			status: 1,
			message: error.message,
		};
	}
}

export default updatePolizaController;
