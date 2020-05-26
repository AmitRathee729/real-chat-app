'use-strict';

module.exports = function (_, passport, User) {

    return {
        SetRouting: function (router) {
            router.get('/', this.indexPage);
            router.get('/signup', this.getSignUp);
            router.post('/signup', User.SignUpValidation, this.postSignup);

            router.post('/', User.loginValidation, this.postLogin);
            router.get('/auth/facebook', this.getFacebookLogin);
            router.get('/auth/facebook/callback', this.facebookLogin);
        },
        indexPage: function (req, res) {
            const errors = req.flash('error');

            return res.render('index', {
                title: 'Footballkik | Login',
                messages: errors,
                hasErrors: errors.length > 0,
            });
        },
        getSignUp: function (req, res) {

            const errors = req.flash('error')
            return res.render('signup', { title: "Chat Application | Login", messages: errors, hasErrors: errors.length > 0 });
        },
        postSignup: passport.authenticate('local.signup', {
            successRedirect: '/home',
            failureRedirect: '/signup',
            failureFlash: true,
        }),
        getFacebookLogin: passport.authenticate('facebook', {
            scope: 'email',
        }),
        facebookLogin: passport.authenticate('facebook', {
            successRedirect: '/home',
            failureRedirect: '/signup',
            failureFlash: true,
        }),
        login: function (req, res) {
            return res.json({
                status: "Login successfully",
                isBoarding: true,
                cookies: req.cookies,
                sessionID: req.sessionID
            });
        },
        postLogin: passport.authenticate('local.login', {
            successRedirect: '/home',
            failureRedirect: '/',
            failureFlash: true,
        }),
    }
}