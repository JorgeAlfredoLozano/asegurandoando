/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-catch */
/* eslint-disable prettier/prettier */
import AseguradosManager from '../dao/managerAsegurados.js';
import BienesManager from '../dao/managerBienes.js';
import CompanysManager from '../dao/managerCompanys.js';
import PolizasManager from '../dao/managerPolizas.js';

class CRUDController {
  constructor(manager, successMessage) {
    this.manager = manager;
    this.successMessage = successMessage;
    this.entity = null;
    this.entityUp = null;
  }

  /* CREATE: Método generico para crear una entidad */
  create = async (req, res) => {
    const data = req.body;
    try {
      if (this.manager instanceof BienesManager) {
        this.entity = await this.manager.createBien(data);
      } else if (this.manager instanceof AseguradosManager) {
        this.entity = await this.manager.createAsegurado(data);
      } else if (this.manager instanceof CompanysManager) {
        this.entity = await this.manager.createCompany(data);
      } else if (this.manager instanceof PolizasManager) {
        this.entity = await this.manager.createPoliza(data);
      }
      return res.status(200).json({
        data: this.entity,
        status: 0,
        message: this.successMessage.create,
      });
    } catch (error) {
      throw error;
    }
  }

  /* GET ONE: Método generico para devolver una entidad */
  getOne = async (req, res) => {
    const query = req.parsedQuery || {}; // middleware buildQuery
    try {
      if (this.manager instanceof BienesManager) {
        this.entity = await this.manager.getOneBien(query);
      } else if (this.manager instanceof AseguradosManager) {
        this.entity = await this.manager.getOneAsegurado(query);
      } else if (this.manager instanceof CompanysManager) {
        this.entity = await this.manager.getOneCompany(query);
      } else if (this.manager instanceof PolizasManager) {
        this.entity = await this.manager.getOnePoliza(query);
      }
      return res.status(200).json({
        data: this.entity,
        status: 0,
        message: this.successMessage.getOne,
      });
    } catch (error) {
      throw error;
    }
  }

  /* GET ALL: Método generico para devolver varias entidades */
  getAll = async (req, res) => {
    const query = req.parsedQuery || {}; // middleware buildQuery
    try {
      if (this.manager instanceof BienesManager) {
        this.entity = await this.manager.getAllBienes(query);
      } else if (this.manager instanceof AseguradosManager) {
        this.entity = await this.manager.getAllAsegurados(query);
      } else if (this.manager instanceof CompanysManager) {
        this.entity = await this.manager.getAllCompanys(query);
      } else if (this.manager instanceof PolizasManager) {
        this.entity = await this.manager.getAllPolizas(query);
      }
      if (!this.entity) {
        throw new Error('No hay registros para mostrar.');
      }
      return res.status(200).json({
        data: this.entity,
        status: 0,
        message: this.successMessage.getAll,
      });
    } catch (error) {
      throw error;
    }
  }

  /* UPDATE: Método generico para actualizar una entidad */
  update = async (req, res) => {
    const query = req.parsedQuery || {}; // middleware buildQuery
    const data = req.body;
    try {
      if (Object.keys(query).length > 0) {
        if (this.manager instanceof BienesManager) {
          this.entity = await this.manager.updateBien(query, data);
          if (this.entity.matchedCount > 0) {
            this.entityUp = await this.manager.getOneBien(query);}
        } else if (this.manager instanceof AseguradosManager) {
          this.entity = await this.manager.updateAsegurado(query);
          if (this.entity.matchedCount > 0) {
            this.entityUp = await this.manager.getOneAsegurado(query);}
        } else if (this.manager instanceof CompanysManager) {
          this.entity = await this.manager.updateCompany(query);
          if (this.entity.matchedCount > 0) {
            this.entityUp = await this.manager.getOneCompany(query);}
        } else if (this.manager instanceof PolizasManager) {
          this.entity = await this.manager.updatePoliza(query);
          if (this.entity.matchedCount > 0) {
            this.entityUp = await this.manager.getOnePoliza(query);}
        }
        if (this.entity.matchedCount > 0) {
          return res.status(200).json({
            data: this.entityUp,
            status: 0,
            message: this.successMessage.update,
          });
        } else {
          throw new Error('No se pudo realizar la actualización de datos.');
        }
      } else {
        throw new Error('Falta el criterio de búsqueda para actualizar.');
      }
    } catch (error) {
      throw error;
    }
  }

  /* UPDATE: Método generico para actualizar una entidad */
  delete = async (req, res) => {
    const query = req.parsedQuery || {}; // middleware buildQuery
    if (Object.keys(query).length > 0) {
      if (this.manager instanceof BienesManager) {
        this.entity = await this.manager.deleteBien(query);
      } else if (this.manager instanceof AseguradosManager) {
        this.entity = await this.manager.deleteAsegurado(query);
      } else if (this.manager instanceof CompanysManager) {
        this.entity = await this.manager.deleteCompany(query);
      } else if (this.manager instanceof PolizasManager) {
        this.entity = await this.manager.deletePoliza(query);
      }
      if (this.entity.deletedCount > 0) {
        return res.status(200).json({
          data: {},
          status: 0,
          message: this.successMessage.delete,
        });
      } else {
        throw new Error('No se pudo realizar la eliminación.');
      
      }
    } else {
      throw new Error('Falta el criterio de búsqueda para eliminar.');
    }
  }
}

export default CRUDController;
