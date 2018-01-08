var db = require('../db');
var empModel = require('../model/employee');

module.exports = {
    create: function(req, res){
        var emp = new empModel(req.body);
        emp.save(function(e, r){
            if(e){
                return res.json(e)
            }
            return res.json(r);
        });
    },
    getAll: function(req, res){
        empModel.find({}, function(e, r){
            if(e){
                return res.json(e)
            }
            return res.json(r);
        });
    },
    findById: function(req, res){
        var id = req.params.id;
        empModel.findOne({_id:id}, function(e, r){
            if(e){
                return res.json(e)
            }
            return res.json(r);
        });
    },
    search: function(req, res){
        empModel.find(req.body, function(e, r){
            if(e){
                return res.json(e)
            }
            return res.json(r);
        });
    }
}