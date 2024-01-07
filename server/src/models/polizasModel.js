import mongoose from 'mongoose';

const polizaSchema = new mongoose.Schema({
	idCompany: {
		type: Number,
		required: true,
	},

	idProductor: {
		type: String,
		enum: ['LOBRUNDO MARIA LAURA', 'LOZANO JORGE ALFREDO'],
		default: 'LOBRUNDO MARIA LAURA',
	},

	nroPoliza: {
		type: Number,
		required: true,
	},

	tipoPoliza: {
		type: String,
		enum: ['ORIGINAL', 'REFACTURACION', 'RENOVACION', 'ENDOSO'],
	},

	rama: {
		type: String,
		enum: [
			'INCENDIO',
			'TRANSPORTE',
			'VIDA',
			'SALUD',
			'AUTOS',
			'CRISTALES',
			'ROBO',
			'RIESGOS VARIOS',
			'RESPONSABILIDAD CIVIL',
			'VIDA COLECTIVO',
			'CAUCION',
			'ACCIDENTES PERSONALES',
			'SEPELIO',
			'COMBINADO FAMILIAR',
			'SEGURO TECNICO',
			'INTEGRAL DE COMERCIO',
			'GRANIZO',
			'MOTOS',
		],
	},

	vigencia: {
		type: String,
		enum: ['MENSUAL', 'TRIMESTRAL', 'SEMESTRAL', 'ANUAL'],
		default: 'SEMESTRAL',
	},

	vigenciaInicio: {
		type: Date,
		required: true,
	},

	vigenciaFin: {
		type: Date,
		required: true,
	},

	productor: {
		type: String,
		enum: ['LOBRUNDO MARIA LAURA', 'JORGE LOZANO'],
		default: 'LOBRUNDO MARIA LAURA',
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

	idBien: {
		type: String,
		required: true,
	},

	formaPago: {
		type: String,
		enum: ['DEBITO', 'EFECTIVO'],
		default: 'EFECTIVO',
	},

	premio: {
		type: Number,
	},

	cantidadCuotas: {
		type: Number,
		default: 1,
	},
});

const PolizasModel = mongoose.model('Polizas', polizaSchema);

export default PolizasModel;
