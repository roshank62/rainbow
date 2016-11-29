/* global process:true */

var angularity = require('webpack-angularity-solution');

const PORT    = 56852,
GLOBALS = {
    '$'            : 'jquery',
    'jQuery'       : 'jquery',
    'window.jQuery': 'jquery'
};

module.exports = angularity(process.env, {globals: GLOBALS, port: PORT})
    .include(process.env.MODE)
    .otherwise('app+test')
    .resolve();