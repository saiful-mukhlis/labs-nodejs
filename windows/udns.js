var fs = require('fs-extra');
var _ = require('underscore');

var paths={
    'd:/tools-dns-manager/workbench/beon/tools-dns-manager/src':'d:/tools-income/package/tools-dns-manager/src/',
    'd:/tools-dns-manager/public/packages/beon/tools-dns-manager/':'d:/tools-income/package/tools-dns-manager/public/'
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
                var simpleGit = require('simple-git')('d:/tools-income/package/tools-dns-manager/').add('-A').commit('update').push();
                console.log("push success!");
            }


            index++;

            // console.log(e);
        }); //copies file
    });

});


