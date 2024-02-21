const getProducto = (req, res) => {
    res.status(200).json({mensaje: 'Get Lista de productos'})

}

const createProducto = (req, res) => {
    res.status(201).json({mensaje: 'Create Lista de productos'})
}

const updateProducto = (req, res) => {
    res.json(200).json({mensaje: `Modificar la tarea con id ${req.params.id}`})

}

const deleteProducto = (req, res) => {
    res.status(200).json({id: req.params.id})

}

module.exports = {
    getProducto,
    createProducto,
    updateProducto,
    deleteProducto
}
