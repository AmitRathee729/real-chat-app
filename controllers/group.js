
module.exports = function () {

    return {
        SetRouting: function (router) {
            router.get('/group/:name', this.groupPage);
        },
        groupPage: function (req, res) {
            const name = req.params.name;
            console.log(req.user);
            res.render('groupchat/group', { title: "Chat Application - Group", groupName: name, user: req.user })
        }
    }
}