import mongoose from 'mongoose';

const aseguradoSchema = new mongoose.Schema({
	idAsegurado: [
		{
			nroAsegurado: {
				type: Number,
				required: true,
			},
			idCompañia: {
				type: Number,
				required: true,
			},
		},
	],

	tipoPersona: {
		type: String,
		enum: ['FISICA', 'JURIDICA'],
		default: 'FISICA',
	},

	tipoDoc: {
		type: String,
		enum: ['LE', 'LC', 'CI', 'DNI', 'PA'],
		default: 'DNI',
	},

	documento: {
		type: String,
		required: true,
		validate: {
			validator: function (value) {
				const isValidLength = value.length === 7 || value.length === 8;
				const isValidWithLeadingZero = value.length === 7 && /^\d+$/.test(value);

				return isValidLength || isValidWithLeadingZero;
			},
			message: 'El campo documento debe tener entre 7 y 8 dígitos.',
		},
	},

	cuitCuil: {
		type: Number,
		required: true,
		validate: {
			validator: function (value) {
				return /^\d{11}$/.test(value.toString());
			},
			message: 'El campo cuitCuil debe tener exactamente 11 dígitos.',
		},
	},

	nombresRazon: {
		type: String,
		required: true,
		trim: true,
	},

	genero: {
		type: String,
		enum: ['FEMENINO', 'MASCULINO'],
		default: 'FEMENINO',
	},

	domicilio: {
		type: String,
		required: true,
		trim: true,
	},

	cp: {
		type: Number,
		required: true,
	},

	pais: {
		type: String,
		required: true,
		trim: true,
	},

	provincia: {
		type: String,
		required: true,
		trim: true,
	},

	localidad: {
		type: String,
		required: true,
		trim: true,
	},

	fechaNacimiento: {
		type: Date,
		required: true,
		trim: true,
	},

	condicionIVA: {
		type: String,
		enum: ['RESPONSABLE INSCRIPTO', 'EXCENTO', 'CONSUMIDOR FINAL', 'MONOTRIBUTO'],
		default: 'CONSUMIDOR FINAL',
	},

	email: {
		type: String,
		required: true,
		trim: true,
		validate: {
			validator: function (value) {
				return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
			},
			message: 'El campo email no es una dirección de correo electrónico válida.',
		},
	},

	telefono: {
		type: String,
		required: true,
		trim: true,
	},
});

const AseguradoModel = mongoose.model('Asegurado', aseguradoSchema);

export default AseguradoModel;
