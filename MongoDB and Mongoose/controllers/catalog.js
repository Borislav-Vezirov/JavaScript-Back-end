module.exports = {
    catalog: async (req, res) => {
        const cubes = await req.storage.getAll(req.query);
        const ctx = {
            title: 'Catalog',
            cubes
        }
        res.render('index', ctx);
    }
}