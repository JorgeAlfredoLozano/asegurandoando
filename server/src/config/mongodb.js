import 'dotenv/config';
import { MongoClient } from 'mongodb';
// import mongoose from 'mongoose';

const DB = process.env.MONGO_DB_NAME;
const URI = process.env.MONGO_DB_URI;

class Database {
	constructor() {
		this.uri = URI;
		this.client = new MongoClient(this.uri);
		this.db = null;
	}

	async connectToDatabase() {
		try {
			await this.client.connect();

			this.aseguradosCollection = this.client.db(DB).collection('asegurados');
			this.companysCollection = this.client.db(DB).collection('companys');
			this.polizasCollection = this.client.db(DB).collection('polizas');
			this.bienesCollection = this.client.db(DB).collection('bienes');
			console.log('Conectado a la base de datos');
		} catch (error) {
			console.error(error);
		}
	}

	async disconnect() {
		await this.client.close();
		console.log('Desconectado de la base de datos');
	}
}

export default Database;
