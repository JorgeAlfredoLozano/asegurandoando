// import createAseguradoController from '../../controllers/aseguradosControllers/createAseguradoController.js';
import CompanysManager from '../../dao/managerCompanys.js';
import CompanyModel from '../../models/companyModel.js';
import createCompanyController from '../../controllers/companysControllers/createCompanyController.js';

const companymanager = new CompanysManager();

const createCompanyHandler = async (req, res) => {
	try {
		const data = req.body;
		const validateError = CompanyModel(data).validateSync();
		if (validateError) {
			throw validateError;
		}

		const existingCompany = await companymanager.getOneCompany({
			cuitCuil: data.cuitCuil,
		});

		if (existingCompany) {
			return res.status(400).json({
				data: {},
				status: 2,
				message: 'La compañia de seguros ya existe!.',
			});
		}

		const newCompany = await createCompanyController(data);

		if (!newCompany.data) {
			return res.status(400).json(newCompany);
		} else {
			return res.status(200).json(newCompany);
		}
	} catch (error) {
		return res.status(404).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
};

export default createCompanyHandler;
