import updatePolizaController from '../../controllers/polizasControllers/updatePolizaController.js';

async function updatePolizaHandler(req, res) {
	const query = req.parsedQuery || {}; // middleware buildQuery
	const data = req.body;
	try {
		const poliza = await updatePolizaController(query, data);
		return res.status(200).json({ poliza });
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

export default updatePolizaHandler;
