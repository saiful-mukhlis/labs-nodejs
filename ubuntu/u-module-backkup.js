var fs = require('fs-extra');
var _ = require('underscore');

var paths={
    '/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/dev-infrastructure-monitoring/public/packages/beon/monitoring-backup/':'/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/monitoring-backup/public/',
    '/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/dev-infrastructure-monitoring/workbench/beon/monitoring-backup/src/':'/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/monitoring-backup/src/'
};

var index=0;
_.each(paths, function(e,i){
    fs.remove(e, function(err) {
        if (err) return console.error(err);
        console.log("success! remove :" + e);
        fs.copy(i, e, function(err) {
            if (err) return console.error(err);
            console.log("success!");
            console.log(i + ' to ' + e);

            if(index==1){
                var simpleGit = require('simple-git')('/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/monitoring-backup/').add('-A').commit('update').push();
                console.log("push success!");
            }


            index++;

            // console.log(e);
        }); //copies file
    });

});


