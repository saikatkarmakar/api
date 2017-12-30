var db = require('../db');
var ObjectId = require('mongodb').ObjectId;
var collection = db.get().collection('employee');
module.exports = {
    create: function(req, res){        
        collection.insertOne(req.body, function(e, r){
            if(e){
                return res.json(e)
            }
            return res.json(r);
        });
    },
    getAll: function(req, res){
        collection.find({}).toArray(function(e, r){
            if(e){
                return res.json(e)
            }
            return res.json(r);
        });
    },
    findById: function(req, res){
        var id = req.params.id;
        collection.findOne({_id:ObjectId(id)}, function(e, r){
            if(e){
                return res.json(e)
            }
            return res.json(r);
        });
    }
}