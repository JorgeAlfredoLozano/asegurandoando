import mongoose from 'mongoose';

const contactoSchema = new mongoose.Schema({
	tipo: {
		type: String,
		enum: ['email', 'telefono', 'responsable', 'observaciones'],
		required: true,
	},
	valor: {
		type: String,
		required: true,
	},
});

const areaSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
		trim: true,
	},
	contactos: [contactoSchema],
});

const companyScheme = new mongoose.Schema({
	idCompany: {
		type: Number,
		required: true,
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
	areas: [areaSchema],
});

const CompanyModel = mongoose.model('Company', companyScheme);

export default CompanyModel;

// const nuevaEmpresa = new CompanyModel({
//
//     areas: [
//         {
//             nombre: 'Área 1',
//             contactos: [
//                 { tipo: 'email', valor: 'correo1@empresa.com' },
//                 { tipo: 'telefono', valor: '123-456-7890' },
//                 { tipo: 'responsable', valor: 'Responsable 1' },
//                 { tipo: 'observaciones', valor: 'Observaciones 1' },
//             ],
//         },
//         {
//             nombre: 'Área 2',
//             contactos: [
//                 { tipo: 'email', valor: 'correo2@empresa.com' },
//                 { tipo: 'telefono', valor: '987-654-3210' },
//                 { tipo: 'responsable', valor: 'Responsable 2' },
//                 { tipo: 'observaciones', valor: 'Observaciones 2' },
//             ],
//         },
//     ],
// });

// nuevaEmpresa.save();
