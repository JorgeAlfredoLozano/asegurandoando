/* eslint-disable prettier/prettier */
import GenericController from "../controllers/genericController.js";

class HandlerGeneric {
  constructor(entityManager, successMessage) {
    this.createGenericController = new GenericController(entityManager, successMessage);
    this.getGenericController = new GenericController(entityManager, successMessage);
    this.getAllGenericController = new GenericController(entityManager, successMessage);
    this.updateGenericController = new GenericController(entityManager, successMessage);
  }

  handleCreate = async (req, res) => {
    const data = req.body;
    try {
      const result = await this.createGenericController.createEntity(data);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        data: {},
        status: 1,
        message: error.message,
      });
    }
  };

  handleGetOne = async (req, res) => {
    const query = req.parsedQuery || {}; // middleware buildQuery
    try {
      const result = await this.getGenericController.getEntity(query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        data: {},
        status: 1,
        message: error.message,
      });
    }
  };

  handleGetAll = async (req, res) => {
    const query = req.parsedQuery || {}; // middleware buildQuery
    console.log(query)
    try {
      const result = await this.getAllGenericController.getAllEntity(query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        data: {},
        status: 1,
        message: error.message,
      });
    }
  };
  
  handleUpdate = async (req, res) => {
    const query = req.parsedQuery || {}; // middleware buildQuery
    const data = req.body;
    try {
      const result = await this.updateGenericController.updateEntity(query, data);
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(400).json({
        data: {},
        status: 1,
        message: error.message,
      });
    }
  };

}

export default HandlerGeneric;
