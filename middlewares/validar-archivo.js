

const validarArchivo = async ( req, res, next ) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.img ) {
        return res.status(400).json({ msg: 'No hay archivos para subir'});
    }

    next()

}

module.exports = {
    validarArchivo
}