import getAllAseguradosController from '../../controllers/aseguradosControllers/getAllAseguradosController.js';

async function getAllAseguradosHandler(req, res) {
	const query = req.parsedQuery || {}; // middleware buildQuery
	try {
		const asegurados = await getAllAseguradosController(query);
		return res.status(200).json(asegurados);
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

export default getAllAseguradosHandler;
