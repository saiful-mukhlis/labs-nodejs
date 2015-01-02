var fs = require('fs-extra');
var _ = require('underscore');

var paths={
    'd:/tools-income/crm/public/packages/beon/crm/':'d:/tools-income/package/crm/public/',
    'd:/tools-income/crm/public/packages/beon/ext-adminlte/':'d:/tools-income/package/ext-adminlte/public/',
    'd:/tools-income/crm/public/packages/beon/js-adminlte/':'d:/tools-income/package/js-adminlte/public/',
    'd:/tools-income/crm/workbench/beon/crm/src/':'d:/tools-income/package/crm/src/',
    'd:/tools-income/crm/workbench/beon/ext-adminlte/src/':'d:/tools-income/package/ext-adminlte/src/',
    'd:/tools-income/crm/workbench/beon/js-adminlte/src/':'d:/tools-income/package/js-adminlte/src/'
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
                var simpleGit = require('simple-git')('d:/tools-income/package/crm/').add('-A').commit('update').push();
                console.log("push success 1!");
                var simpleGit2 = require('simple-git')('d:/tools-income/package/ext-adminlte/').add('-A').commit('update').push();
                console.log("push success 2!");
                var simpleGit3 = require('simple-git')('d:/tools-income/package/js-adminlte/').add('-A').commit('update').push();
                console.log("push success 3!");
            }


            index++;

            // console.log(e);
        }); //copies file
    });

});

