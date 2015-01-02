var fs = require('fs-extra');
var _ = require('underscore');

var paths={
    'd:/tools-error-module/public/packages/beon/log-error-module/':'d:/tools-income/package/log-error-module/public/',
    'd:/tools-error-module/workbench/beon/log-error-module/src/':'d:/tools-income/package/log-error-module/src/'
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
                var simpleGit = require('simple-git')('d:/tools-income/package/log-error-module/').add('-A').commit('update').push();
                console.log("push success!");
            }


            index++;

            // console.log(e);
        }); //copies file
    });

});


