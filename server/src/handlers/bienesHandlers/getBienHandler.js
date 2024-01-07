import getBienController from '../../controllers/bienesControllers/getABienController.js';

async function getBienHandler(req, res) {
	const query = req.parsedQuery || {}; // middleware buildQuery
	try {
		const User = await getBienController(query);
		return res.status(200).json(User);
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

export default getBienHandler;
