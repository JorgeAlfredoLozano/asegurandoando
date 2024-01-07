import AseguradosManager from '../../dao/managerAsegurados.js';

const aseguradomanager = new AseguradosManager();

async function updateAseguradoController(query, data) {
	try {
		if (Object.keys(query).length > 0) {
			const asegurado = await aseguradomanager.updateAsegurado(query, data);
			if (asegurado.matchedCount > 0) {
				const aseguradoUp = await aseguradomanager.getOneAsegurado(query);
				return {
					data: aseguradoUp,
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

export default updateAseguradoController;
