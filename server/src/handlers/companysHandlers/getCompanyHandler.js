import getCompanyController from '../../controllers/companysControllers/getCompanyController.js';

async function getCompanyHandler(req, res) {
	const query = req.parsedQuery || {}; // middleware buildQuery
	try {
		const company = await getCompanyController(query);
		return res.status(200).json(company);
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

export default getCompanyHandler;
