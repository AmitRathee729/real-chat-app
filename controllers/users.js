'use strick'        // for javascript strick mode

module.exports = function (_) {         //_ = lodash pass in conntainer.js

    return {
        setRouting: function (router) {     // setRouting and router come from (setup router / index.js)
            router.get('/', this.indexPage)     // this.indexPage come from (line 10)
        },

        indexPage: function (req, res) {
            return res.render('index', { test: 'This is a test' })  // render is a part of ejs module and it call it to ejs (setup configuration index.js)
        }                                                           // index is a ejs file , test is function in side ejs file
    }
}
