import Database from '../config/mongodb.js';
import {
	createDocument,
	getOneDocument,
	getAllDocuments,
	updateDocument,
} from '../config/factory.js';

import BienesModel from '../models/bienesModel.js';

class BienesManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
	}

	async createBien(data) {
		const { dominio, tipoVehiculo, carroceria, anio, marcaModelo, motor, chasis } = data;

		const bien = BienesModel({
			dominio,
			tipoVehiculo,
			carroceria,
			anio,
			marcaModelo,
			motor,
			chasis,
		});

		try {
			await this.createDocument('bienesCollection', bien);
		} catch (error) {
			console.error(error.message);
			throw new Error('No se pudo crear el bien.');
		}
	}

	async getOneBien(query) {
		try {
			const bien = await this.getOneDocument('bienesCollection', query);
			return bien;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener el bien asegurado: ${error.message}`);
		}
	}

	async getAllBienes(query) {
		try {
			const bienes = await this.getAllDocuments('bienesCollection', query);
			return bienes;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener los bienes asegurados: ${error.message}`);
		}
	}

	async updateBien(filter, dataUpdate) {
		try {
			const bien = await this.updateDocument('bienesCollection', filter, dataUpdate);
			return bien;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al actualizar el bien asegurado: ${error.message}`);
		}
	}

	async deleteBien(filter) {
		try {
			const bienDelete = await this.deleteDocument('bienesCollection', filter);
			return bienDelete;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al intentar eliminar el bien: ${error.message}`);
		}
	}
}

export default BienesManager;
