import createAseguradoController from '../../controllers/aseguradosControllers/createAseguradoController.js';
import AseguradosManager from '../../dao/managerAsegurados.js';
import AseguradoModel from '../../models/aseguradoModel.js';

const aseguradomanager = new AseguradosManager();

const createAseguradoHandler = async (req, res) => {
	try {
		const data = req.body;
		const validateError = AseguradoModel(data).validateSync();
		if (validateError) {
			throw validateError;
		}

		const existingAsegurado = await aseguradomanager.getOneAsegurado({
			tipoDoc: data.tipoDoc,
			documento: data.documento,
		});

		if (existingAsegurado) {
			return res.status(400).json({
				data: {},
				status: 2,
				message: 'El asegurado ya existe.',
			});
		}

		const newAsegurado = await createAseguradoController(data);

		if (!newAsegurado.data) {
			return res.status(400).json(newAsegurado);
		} else {
			return res.status(200).json(newAsegurado);
		}
	} catch (error) {
		return res.status(404).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
};

export default createAseguradoHandler;
