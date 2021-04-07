const router = require('express').Router()

const { loadImage, returnImage } = require('../controller/image-controller')

router
    .route('/images/:name')
    .get(returnImage)
    .post(loadImage)

module.exports = router