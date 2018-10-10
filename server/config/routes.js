
const tasks = require('../controllers/tasks.js')

module.exports = function (app) {

    app.get('/', function (req, res) {
        tasks.index(req, res)
    })

    app.post('/', function (req, res) {
        tasks.new(req, res)
    })

    app.delete('/:id', function (req, res) {
        tasks.remove(req, res, req.params.id)
    })

    app.put('/:id', function (req, res) {
        tasks.update(req, res, req.params.id)
    })

    app.get('/:id', function (req, res) {
        tasks.profile(req, res, req.params.id)
    })
}