import Database from '../config/mongodb.js';
import {
	createDocument,
	getOneDocument,
	getAllDocuments,
	updateDocument,
} from '../config/factory.js';

import CompanyModel from '../models/companyModel.js';

class CompanysManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
	}

	async createCompany(data) {
		const { idCompany, cuitCuil, nombresRazon, domicilio, cp, pais, provincia, localidad, areas } =
			data;

		const company = CompanyModel({
			idCompany,
			cuitCuil,
			nombresRazon,
			domicilio,
			cp,
			pais,
			provincia,
			localidad,
			areas: areas.map(area => ({
				nombre: area.nombre,
				contactos: area.contactos.map(contacto => ({
					tipo: contacto.tipo,
					valor: contacto.valor,
				})),
			})),
		});

		await this.createDocument('companysCollection', company);
	}

	async getOneCompany(query) {
		try {
			const company = await this.getOneDocument('companysCollection', query);
			return company;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener la compañía de seguros: ${error.message}`);
		}
	}

	async getAllCompanys(query) {
		try {
			const companys = await this.getAllDocuments('companysCollection', query);
			return companys;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener las compañías de seguros: ${error.message}`);
		}
	}

	async updateCompany(filter, dataUpdate) {
		try {
			const company = await this.updateDocument('companysCollection', filter, dataUpdate);
			return company;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al actualizar la compañía de seguros: ${error.message}`);
		}
	}
}

export default CompanysManager;
