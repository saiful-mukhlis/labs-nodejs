var fs = require('fs-extra');
var _ = require('underscore');

var paths={
    'd:/tools-error-module/public/packages/beon/log-error-module/':'d:/tools-income/package/log-error-module/public/',
    'd:/tools-error-module/workbench/beon/log-error-module/src/':'d:/tools-income/package/log-error-module/src/'
};

var simpleGit = require('simple-git')('d:/tools-income/package/log-error-module/').add('-A').commit('update').push();
simpleGit.add('-A').commit('update simple').push();

