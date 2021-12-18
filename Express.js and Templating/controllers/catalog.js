module.exports = {

    catalog: (req, res) => {
        res.render('index', { title: 'Catalog' })
    }
}