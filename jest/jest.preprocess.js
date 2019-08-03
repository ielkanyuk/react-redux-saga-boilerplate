const setup = require('../babel/setup');
module.exports = require('babel-jest').createTransformer(setup({ jest: true }));