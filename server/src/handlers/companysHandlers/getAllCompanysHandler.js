import getAllCompanysController from '../../controllers/companysControllers/getAllCompanysController.js';

async function getAllCompanysHandler(req, res) {
	const query = req.parsedQuery || {}; // middleware buildQuery
	try {
		const asegurados = await getAllCompanysController(query);
		return res.status(200).json(asegurados);
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

export default getAllCompanysHandler;
