import CompanysManager from '../../dao/managerCompanys.js';

const companymanager = new CompanysManager();

async function getCompanyController(query) {
	try {
		const User = await companymanager.getOneCompany(query);
		if (!User) {
			throw new Error('La compañía de seguros no existe!.');
		}
		return {
			data: User,
			status: 0,
			message: 'Compañía de seguros encontrada exitosamente!.',
		};
	} catch (error) {
		return {
			data: {},
			status: 1,
			message: error.message,
		};
	}
}

export default getCompanyController;
