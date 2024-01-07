import Database from '../config/mongodb.js';
import {
	createDocument,
	getOneDocument,
	getAllDocuments,
	updateDocument,
} from '../config/factory.js';

import AseguradoModel from '../models/aseguradoModel.js';

class AseguradosManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
	}

	async createAsegurado(data) {
		const {
			idAsegurado,
			tipoPersona,
			tipoDoc,
			documento,
			cuitCuil,
			nombresRazon,
			genero,
			domicilio,
			cp,
			pais,
			provincia,
			localidad,
			fechaNacimiento,
			condicionIVA,
			email,
			telefono,
		} = data;

		const asegurado = AseguradoModel({
			idAsegurado,
			tipoPersona,
			tipoDoc,
			documento,
			cuitCuil,
			nombresRazon,
			genero,
			domicilio,
			cp,
			pais,
			provincia,
			localidad,
			fechaNacimiento,
			condicionIVA,
			email,
			telefono,
		});

		await this.createDocument('aseguradosCollection', asegurado);
	}

	async getOneAsegurado(query) {
		try {
			const asegurado = await this.getOneDocument('aseguradosCollection', query);
			return asegurado;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener el asegurado: ${error.message}`);
		}
	}

	async getAllAsegurados(query) {
		try {
			const asegurados = await this.getAllDocuments('aseguradosCollection', query);
			return asegurados;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener el asegurado: ${error.message}`);
		}
	}

	async updateAsegurado(filter, dataUpdate) {
		try {
			const asegurados = await this.updateDocument('aseguradosCollection', filter, dataUpdate);
			return asegurados;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al actualizar el asegurado: ${error.message}`);
		}
	}
}

export default AseguradosManager;
