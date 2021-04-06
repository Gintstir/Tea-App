const router = require('express').Router()

const { testing } = require('../controller/image-controller')

router
    .route('/images')
    .get(testing)

module.exports = router