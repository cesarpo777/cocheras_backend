
const extraerIdImagen = (path) => {

    const arrPath = path.split('/');
    const nombreMasExt = arrPath[ arrPath.length -1 ]
    const arrPublicId = nombreMasExt.split('.')
    const publicId = arrPublicId[0] 

    return publicId
}

module.exports = extraerIdImagen;