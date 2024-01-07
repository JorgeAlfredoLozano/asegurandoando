/* eslint-disable prettier/prettier */
import AseguradosManager from '../dao/managerAsegurados.js';
import BienesManager from '../dao/managerBienes.js';

class genericController {
	constructor(manager, successMessage) {
		this.manager = manager;
		this.successMessage = successMessage;
		this.entity = null;
	}

	async createEntity(data) {
		try {
			if (this.manager instanceof BienesManager) {
				this.entity = await this.manager.createBien(data);
			} else if (this.manager instanceof AseguradosManager) {
				this.entity = await this.manager.createAsegurado(data);
			}
			return {
				data: this.entity,
				status: 0,
				message: this.successMessage,
			};
		} catch (error) {
			return {
				data: {},
				status: 1,
				message: error.message,
			};
		}
	}

	async getEntity(query) {
		try {
			if (this.manager instanceof BienesManager) {
				this.entity = await this.manager.getOneBien(query);
			} else if (this.manager instanceof AseguradosManager) {
				this.entity = await this.manager.getOneAsegurado(query);
			}
			return {
				data: this.entity,
				status: 0,
				message: this.successMessage,
			};
		} catch (error) {
			return {
				data: {},
				status: 1,
				message: error.message,
			};
		}
	}

	async getAllEntity(query = {}) {
		try {
			console.log("2",query)
			if (this.manager instanceof BienesManager) {
				this.entity = await this.manager.getAllBienes(query);
			} else if (this.manager instanceof AseguradosManager) {
				this.entity = await this.manager.getAllAsegurados(query);
			}
			if (!this.entity) {
				throw new Error('No hay registros para mostrar.');
			}
			console.log(this.entity)
			return {
				data: this.entity,
				status: 0,
				message: this.successMessage,
			};
		} catch (error) {
			return {
				data: {},
				status: 1,
				message: error.message,
			};
		}
	}

	async updateEntity(query, data) {
		try {
			if (Object.keys(query).length > 0) {
				if (this.manager instanceof BienesManager) {					
					this.entity = await this.manager.updateBien(query, data);
				} else if (this.manager instanceof AseguradosManager) {
					this.entity = await this.manager.updateAsegurado(query);
				}
				console.log(this.entity.matchedCoun)
				if (this.entity.matchedCount > 0) {
					const aseguradoUp = await this.manager.getOneBien(query);
					console.log(aseguradoUp)
					return {
						data: aseguradoUp,
						status: 0,
						message: this.successMessage,
					};
				} else {
					throw new Error('No se pudo realizar la actualización de datos.');
				}
			} else {
				throw new Error('Falta el criterio de busqueda para actualizar.');
			}
		} catch (error) {
			return {
				data: {},
				status: 1,
				message: error.message,
			};
		}
	}

}

export default genericController;
