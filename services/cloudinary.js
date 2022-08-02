const fs = require('fs');
const User = require('../models/user');
const Cochera = require('../models/Cochera');
const extraerIdImagen = require('../helpers/extraerPublicId');
const cloudinary = require('cloudinary').v2;
cloudinary.config( process.env.CLOUDINARY_URL );

const uploadImg = async (id, path) => {

    // Verificar si el usuario ya tiene una imagen
    const user = await User.findOne({ _id: id , estado: true });

    if(user.img){
        const public_id = extraerIdImagen(user.img)
       
        // Si ya tiene una, reemplazarla por la nueva
        cloudinary.uploader.destroy( `usuarios/${id}/${public_id}`);
    }

    // Subir imagen a cloudinary
    let cloudinaryOpts = {
        resource_type:'image',
        folder: `usuarios/${id}`
    }
    const result = await cloudinary.uploader.upload( path, cloudinaryOpts )
    // Borrar imagen del servidor
    fs.unlinkSync(path)
    // Extraer url de img
    const { secure_url } = result;
    return secure_url
    
    
}

const uploadMultipleImages = async ( req, id ) =>{
    

    let cloudinaryOpts = {
        use_filename: true,
        resource_type: 'image',
        folder: `cocheras/${id}`
    }

    // Arreglo de archivos
    const arrFiles = req.files;

    // Arreglo de paths
    const paths = arrFiles.map((c) =>{
        return c.path
    })

    // Por cada path en el arreglo subir imagen a cloudinary
    const promises = paths.map(async(p) => {
        return await cloudinary.uploader.upload(p, cloudinaryOpts)
    })

    // Ejecutar todas las promesas en una sola
    const result =  await Promise.all(promises)

    // Borrar imgs del servidor
    paths.forEach((p) =>{
        fs.unlinkSync(p)
    })

    // Extraigo los links de las respuestas de cloudinary
    const cocherasLinks = result.map((i) =>{
        return i.secure_url
    })
    // Asignar imagenes a modelo 
    const options = {
        new: true,
        projection: { imgs: 1, _id: 0 }
    }

    const { imgs } = await Cochera.findOneAndUpdate({_id: id , estado: true }, { imgs: cocherasLinks }, options )
    console.log( imgs )
    return imgs
    
}

const destroyImage = async(path, userId) => {

    const public_id = extraerIdImagen(path)
    const result = await cloudinary.uploader.destroy(`usuarios/${userId}/${public_id}`)
    return result

}

module.exports = {
    uploadImg,
    uploadMultipleImages,
    destroyImage
}