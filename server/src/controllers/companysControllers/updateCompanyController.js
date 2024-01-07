import CompanysManager from '../../dao/managerCompanys.js';

const companymanager = new CompanysManager();

async function updateCompanyController(query, data) {
	try {
		if (Object.keys(query).length > 0) {
			const company = await companymanager.updateCompany(query, data);
			if (company.matchedCount > 0) {
				const companyUp = await companymanager.getOneCompany(query);
				return {
					data: companyUp,
					status: 0,
					message: 'La actualización de datos fue exitosa.',
				};
			} else {
				throw new Error('No se pudo realizar la actualización de datos.');
			}
		} else {
			throw new Error('Falta el criterio único de busqueda para actualizar.');
		}
	} catch (error) {
		return {
			data: {},
			status: 1,
			message: error.message,
		};
	}
}

export default updateCompanyController;
