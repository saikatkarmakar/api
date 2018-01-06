var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    firstName: {type: String, required: true, minlength: 3},
    lastName: {type: String, required: true, minlength: 3},
    emailId: {type: String, required: true},
    city: String,
    state: String,
    zip: Number
});

var Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;