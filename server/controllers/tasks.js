
var moment = require('moment');

const mongoose = require('mongoose'),
Task = mongoose.model('Task')


module.exports = {
    index: function(req, res) {
        Task.find({}, function(err, data){
            if(err){
                console.log("error")
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", tasks: data});
            }
        })
    },

    new: function(req, res) {

        var task = new Task({ title: req.body.title, description: req.body.description });

        task.save(function (err) {
            if (err) {
                console.log('something went wrong');
                res.redirect('/');
            } else {
                console.log('successfully added a task!');
                res.redirect("/");
            }
        })
    },

    remove: function(req, res, id) {

    	Task.deleteOne({ _id: id }, function (err) {
            if (err) {
                console.log('something went wrong');
                res.redirect('/');
            } else {
                console.log('successfully removed task');
                res.json({message: "Success", task: "Removed"});
            }
        })
    },

    update: function(req, res, id) {

        Task.update({ _id: id }, {$set: { title: req.body.title, description: req.body.description, completed: req.body.completed }}, function (err) {
            if (err) {
                console.log('something went wrong');
                res.redirect('/');
            } else {
                console.log('successfully updated task');
                res.redirect("/");
            }
        })
    },

    profile: function(req, res, id) {
    	Task.find({ _id: id }, function (err, data) {
            if (err) {
                console.log(err)
                res.redirect('/');
            } else {
                res.json({message: "Success", task: data});
            }
        })
    }
};