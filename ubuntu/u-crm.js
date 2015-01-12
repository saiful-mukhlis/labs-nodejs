var fs = require('fs-extra');
var _ = require('underscore');

var paths={
    '/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/crm-dev/public/packages/beon/crm/'
        :'/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/crm/public/',

    '/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/crm-dev/public/packages/beon/ext-adminlte/'
        :'/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/ext-adminlte/public/',

    '/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/crm-dev/public/packages/beon/js-adminlte/'
        :'/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/js-adminlte/public/',


    '/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/crm-dev/workbench/beon/crm/src/'
        :'/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/crm/src/',

    '/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/crm-dev/workbench/beon/ext-adminlte/src/'
        :'/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/ext-adminlte/src/',

    '/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/crm-dev/workbench/beon/js-adminlte/src/'
        :'/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/js-adminlte/src/'
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

            if(index==5){
                var simpleGit = require('simple-git')('/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/crm/').add('-A').commit('update').push();
                console.log("push success 1!");
                var simpleGit2 = require('simple-git')('/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/ext-adminlte/').add('-A').commit('update').push();
                console.log("push success 2!");
                var simpleGit3 = require('simple-git')('/media/sai/961dc67f-d5e8-41d3-bec1-bcc7fba0c3ba/project/js-adminlte/').add('-A').commit('update').push();
                console.log("push success 3!");
            }


            index++;

            // console.log(e);
        }); //copies file
    });

});





