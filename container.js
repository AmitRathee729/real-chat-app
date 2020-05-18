const dependable = require('dependable')        // it allows us to create dependencies from our modules
const path = require('path')            // nodejs inbuilt library

const container = dependable.container();
// load modules
const simpleDependecies = [      // arrays of modules that we need
    ['_', 'lodash'],             //  same as ['lodash', 'lodash']   it become a dependencies

];
// this see simpleDependecies array at each value 
simpleDependecies.forEach(function (val) {
    container.register(val[0], function () {
        return require(val[1])
    })
})

// use container modules in every files comes under controllers and helpers folder
container.load(path.join(__dirname, '/controllers'))
container.load(path.join(__dirname, '/helpers'))
// register container modules and ready to export
container.register('container', function () {
    return container
})

module.exports = container;