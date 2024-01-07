import updateAseguradoController from '../../controllers/aseguradosControllers/updateAseguradoController.js';

async function updateAseguradoHandler(req, res) {
	const query = req.parsedQuery || {}; // middleware buildQuery
	const data = req.body;
	try {
		const asegurado = await updateAseguradoController(query, data);
		return res.status(200).json({ asegurado });
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

export default updateAseguradoHandler;
