import getPolizaController from '../../controllers/polizasControllers/getPolizaController.js';

async function getPolizaHandler(req, res) {
	const query = req.parsedQuery || {}; // middleware buildQuery
	try {
		const company = await getPolizaController(query);
		return res.status(200).json(company);
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

export default getPolizaHandler;
