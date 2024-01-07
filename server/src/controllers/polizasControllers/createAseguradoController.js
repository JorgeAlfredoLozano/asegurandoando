import PolizasManager from '../../dao/managerPolizas.js';
const polizamanager = new PolizasManager();

const createPolizaController = async data => {
	try {
		const newPoliza = await polizamanager.createPoliza(data);
		return {
			data: newPoliza,
			status: 0,
			message: 'Póliza creada correctamente',
		};
	} catch (error) {
		return {
			data: {},
			status: 1,
			message: error.message,
		};
	}
};

export default createPolizaController;
