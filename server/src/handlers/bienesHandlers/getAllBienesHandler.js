import getAllBienesController from '../../controllers/bienesControllers/getAllBienesController.js';

async function getAllBienesHandler(req, res) {
	const query = req.parsedQuery || {}; // middleware buildQuery
	try {
		const asegurados = await getAllBienesController(query);
		return res.status(200).json(asegurados);
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

export default getAllBienesHandler;
