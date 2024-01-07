import createPolizaController from '../../controllers/polizasControllers/createAseguradoController.js';
import PolizasManager from '../../dao/managerPolizas.js';
import PolizasModel from '../../models/polizasModel.js';

const polizamanager = new PolizasManager();

const createPolizaHandler = async (req, res) => {
	try {
		const data = req.body;
		const validateError = PolizasModel(data).validateSync();
		if (validateError) {
			throw validateError;
		}

		const existingPoliza = await polizamanager.getOnePoliza({
			nroPoliza: data.nroPoliza,
		});

		if (existingPoliza) {
			return res.status(400).json({
				data: {},
				status: 2,
				message: 'La póliza ya existe.',
			});
		}

		const newPoliza = await createPolizaController(data);

		if (!newPoliza.data) {
			return res.status(400).json(newPoliza);
		} else {
			return res.status(200).json(newPoliza);
		}
	} catch (error) {
		return res.status(404).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
};

export default createPolizaHandler;
