'use-strict';

module.exports = function () {

    return {
        SignUpValidation: (req, res, next) => {
            req.checkBody('username', 'user name is required').notEmpty();
            req.checkBody('username', 'username must be 2 character long').isLength({ min: 2 });
            req.checkBody('email', 'email  is required').notEmpty();
            req.checkBody('email', 'email is invalid').isEmail();
            req.checkBody('password', 'password is required').notEmpty();
            req.checkBody('username', 'password must be 5 characters long').isLength({ min: 5 })
            req.getValidationResult().then((result) => {
                const error = result.array();
                const messages = [];
                error.forEach(error => {
                    messages.push(error.msg)
                });
                req.flash('error', messages);
                res.redirect('/signup');
            })
                .catch((err) => {
                    return next();
                })
        },

        loginValidation: (req, res, next) => {
            req.checkBody('email', 'Email is Required').notEmpty();
            req.checkBody('email', 'Email is Invalid').isEmail();
            req.checkBody('password', 'Password is Required').notEmpty();
            req.checkBody('password', 'Email Must Not Be Less Than 5').isLength({ min: 5 });

            req.getValidationResult()
                .then(result => {
                    const messages = result.array().map(error => error.msg);
                    req.flash('error', messages);
                    res.redirect('/');
                })
                .catch(err => {
                    return next();
                });
        },
    };
};
