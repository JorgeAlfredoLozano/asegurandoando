import CompanysManager from '../../dao/managerCompanys.js';

const companymanager = new CompanysManager();

async function getAllCompanysController(query = {}) {
	try {
		const companys = await companymanager.getAllCompanys(query);
		if (!companys) {
			throw new Error('No hay compañías de seguros para mostrar.');
		}
		return {
			data: companys,
			status: 0,
			message: 'Se han encontrado las siguientes compañías de seguros',
		};
	} catch (error) {
		return {
			data: {},
			status: 1,
			message: error.message,
		};
	}
}

export default getAllCompanysController;
