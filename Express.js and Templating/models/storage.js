const fs     = require('fs/promises');
const uniqId = require('uniqid');

let data = {};

async function init(){
    try {
        data = JSON.parse(await fs.readFile('./models/data.json'));
    } catch (error) {
        console.error('Error reading from database');
    }

    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create
        };
        next();
    }
}

async function getAll(query){

    let cubes = Object.entries(data)
            .map(([id, v]) => Object.assign({}, {id}, v));

    if(query.search){
        cubes = cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()));
    }
    if(query.from){
        cubes = cubes.filter(c => c.difficulty >= Number(query.from));
    }
    if(query.to){
        cubes = cubes.filter(c => c.difficulty <= Number(query.to));
    }

    return cubes;
}

async function getById(id){

    return data[id];
}

async function create(cube){
    const id = uniqId();
    data[id] = cube;

    try {
        await fs.writeFile('./models/data.json', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing out database');
    }
}

module.exports = {
    init,
    getAll,
    getById,
    create
}