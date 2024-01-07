import updateCompanyController from '../../controllers/companysControllers/updateCompanyController.js';

async function updateCompanyHandler(req, res) {
	const query = req.parsedQuery || {}; // middleware buildQuery
	const data = req.body;
	try {
		const company = await updateCompanyController(query, data);
		return res.status(200).json({ company });
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

export default updateCompanyHandler;
