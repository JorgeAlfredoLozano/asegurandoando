import CompanysManager from '../../dao/managerCompanys.js';
const companymanager = new CompanysManager();

const createCompanyController = async data => {
	try {
		const newCompany = await companymanager.createCompany(data);
		return {
			data: newCompany,
			status: 0,
			message: 'Compañía de seguros creada correctamente!',
		};
	} catch (error) {
		return {
			data: {},
			status: 1,
			message: error.message,
		};
	}
};

export default createCompanyController;
