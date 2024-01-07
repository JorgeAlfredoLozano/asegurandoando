import createBienController from '../../controllers/bienesControllers/createBienController.js';
import BienesManager from '../../dao/managerBienes.js';
import BienesModel from '../../models/bienesModel.js';

const bienmanager = new BienesManager();

const createBienHandler = async (req, res) => {
	try {
		const data = req.body;
		const validateError = BienesModel(data).validateSync();
		if (validateError) {
			throw validateError;
		}

		const existingBien = await bienmanager.getOneBien({
			dominio: data.dominio,
		});

		if (existingBien) {
			return res.status(400).json({
				data: {},
				status: 2,
				message: 'El bien ya existe.',
			});
		}

		const newBien = await createBienController(data);

		if (!newBien.data) {
			return res.status(400).json(newBien);
		} else {
			return res.status(200).json(newBien);
		}
	} catch (error) {
		return res.status(404).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
};

export default createBienHandler;
