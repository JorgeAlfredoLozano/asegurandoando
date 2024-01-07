import BienesManager from '../../dao/managerBienes.js';
const bienmanager = new BienesManager();

const createBienController = async data => {
	try {
		const newBien = await bienmanager.createBien(data);
		return {
			data: newBien,
			status: 0,
			message: 'Bien creado correctamente',
		};
	} catch (error) {
		return {
			data: {},
			status: 1,
			message: error.message,
		};
	}
};

export default createBienController;
