module.exports = function(app){
    app.get('/', function(req, res){
        res.json({
            status: 'SUCCESS'
        })
    });

    var employee = require('./controller/employee');
    app
        .post('/employee', employee.create)
        .get('/employee', employee.getAll)
        .get('/employee/:id', employee.findById)
        .post('/employee/search', employee.search)
};