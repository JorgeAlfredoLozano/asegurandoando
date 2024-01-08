import Database from '../config/mongodb.js';
import {
	createDocument,
	getOneDocument,
	getAllDocuments,
	updateDocument,
} from '../config/factory.js';

import PolizasModel from '../models/polizasModel.js';

class PolizasManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
	}

	async createPoliza(data) {
		const {
			idCompany,
			idProductor,
			nroPoliza,
			tipoPoliza,
			rama,
			vigencia,
			vigenciaInicio,
			vigenciaFin,
			productor,
			tipoDoc,
			documento,
			idBien,
			formaPago,
			premio,
			cantidadCuotas,
		} = data;

		const poliza = PolizasModel({
			idCompany,
			idProductor: idProductor || 'LOBRUNDO MARIA LAURA',
			nroPoliza,
			tipoPoliza,
			rama,
			vigencia,
			vigenciaInicio,
			vigenciaFin,
			productor: productor || 'LOBRUNDO MARIA LAURA',
			tipoDoc,
			documento,
			idBien,
			formaPago,
			premio,
			cantidadCuotas,
		});

		try {
			await this.createDocument('polizasCollection', poliza);
		} catch (error) {
			console.error(error.message);
			throw new Error('No se pudo crear la póliza.');
		}
	}

	async getOnePoliza(query) {
		try {
			const poliza = await this.getOneDocument('polizasCollection', query);
			return poliza;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener la póliza de seguro: ${error.message}`);
		}
	}

	async getAllPolizas(query) {
		try {
			const polizas = await this.getAllDocuments('polizasCollection', query);
			return polizas;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener las pólizas de seguros: ${error.message}`);
		}
	}

	async updatePoliza(filter, dataUpdate) {
		try {
			const poliza = await this.updateDocument('polizasCollection', filter, dataUpdate);
			return poliza;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al actualizar la póliza de seguro: ${error.message}`);
		}
	}

	async deletePoliza(filter) {
		try {
			const polizaDelete = await this.deleteDocument('polizasCollection', filter);
			return polizaDelete;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al intentar eliminar la póliza: ${error.message}`);
		}
	}
}

export default PolizasManager;
