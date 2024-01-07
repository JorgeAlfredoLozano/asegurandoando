import getAseguradoController from '../../controllers/aseguradosControllers/getAseguradoController.js';

async function getAseguradoHandler(req, res) {
	const query = req.parsedQuery || {}; // middleware buildQuery
	try {
		const User = await getAseguradoController(query);
		return res.status(200).json(User);
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

export default getAseguradoHandler;
