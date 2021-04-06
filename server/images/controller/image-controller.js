const path = require('path')

const imageController = {
    async testing (req, res) {
        // console.log(req)
        res.sendFile(path.join(__dirname, '../mountains-river.png'));
    }
}

module.exports = imageController