/* eslint-disable prettier/prettier */
export function buildQueryMiddleware(req, res, next) {
	const { tipoDoc, documento, nombresRazon, cuitCuil, telefono, nroSocio, genero, idCompany, nroPoliza, dominio } = req.query;
	let query = {};
	if (tipoDoc && documento) {
		query = { tipoDoc, documento };
	} else if (nombresRazon) {
		const trimmedNombresRazon = nombresRazon.trim();
		const regex = new RegExp(trimmedNombresRazon, 'i');
		query = { nombresRazon: { $regex: regex } };
	  } else if (cuitCuil) {
		query = { cuitCuil };
	} else if (nroSocio) {
		query = { nroSocio };
	} else if (telefono) {
		query = { telefono };
	} else if (genero) {
		query = { genero };
	} else if (idCompany) {
		query = { idCompany: parseInt(idCompany, 10) };
	} else if (nroPoliza) {
		query = { nroPoliza: parseInt(nroPoliza, 10) };
	} else if (dominio) {
		query = { dominio };
	}
	req.parsedQuery = query; // Almacenar la consulta en el objeto de solicitud para su uso posterior
	next();
}
