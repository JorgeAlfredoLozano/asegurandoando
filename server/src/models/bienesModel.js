import mongoose from 'mongoose';

const bienesSchema = new mongoose.Schema({
	dominio: {
		type: String,
		required: true,
	},
	tipoVehiculo: {
		type: String,
		required: true,
	},
	carroceria: {
		type: String,
		required: true,
	},
	anio: {
		type: Number,
		required: true,
	},
	marcaModelo: {
		type: String,
		required: true,
	},
	motor: {
		type: String,
		required: true,
	},
	chasis: {
		type: String,
		required: true,
	},
});

const BienesModel = mongoose.model('Bienes', bienesSchema);

export default BienesModel;
