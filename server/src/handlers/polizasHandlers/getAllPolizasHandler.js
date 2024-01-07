import getAllPolizasController from '../../controllers/polizasControllers/getAllPolizasController.js';

async function getAllPolizasHandler(req, res) {
	const query = req.parsedQuery || {}; // middleware buildQuery
	try {
		const polizas = await getAllPolizasController(query);
		return res.status(200).json(polizas);
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

export default getAllPolizasHandler;
