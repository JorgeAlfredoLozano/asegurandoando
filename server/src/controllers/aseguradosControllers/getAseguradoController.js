import AseguradosManager from '../../dao/managerAsegurados.js';

const aseguradomanager = new AseguradosManager();

async function getAseguradoController(query) {
	try {
		const User = await aseguradomanager.getOneAsegurado(query);
		if (!User) {
			throw new Error('El asegurado no existe!.');
		}
		return {
			data: User,
			status: 0,
			message: 'Asegurado encontrado exitosamente!.',
		};
	} catch (error) {
		return {
			data: {},
			status: 1,
			message: error.message,
		};
	}
}

export default getAseguradoController;
