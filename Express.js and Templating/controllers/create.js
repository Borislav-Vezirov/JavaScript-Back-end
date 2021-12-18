module.exports = {

    create: (req, res) => {

        res.render('create', { title: 'Create Page' })
    },

    post: (req, res) => {
        res.redirect('/')
    }
}