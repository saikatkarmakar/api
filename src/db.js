var mongoose = require('mongoose');
var state = {
    db: null,
}


exports.connect = function (done) {
    if (state.db) return done();
    mongoose.connect('mongodb://localhost:27017/ems', function (err, db) {
        if (err) return done(err)
        state.db = db;
        done();
    });
}

exports.get = function () {
    return state.db;
}

/* exports.close = function (done) {
    if (state.db) {
        state.db.close(function (err, result) {
            state.db = null
            state.mode = null
            done(err)
        })
    }
} */