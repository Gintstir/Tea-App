const router = require('express').Router()

const { testing, loadImage, returnImage } = require('../controller/image-controller')

router
    .route('/images')
    .get(testing)
    .post(loadImage)

router
    .route('/images/getOne')
    .get(returnImage)

module.exports = router