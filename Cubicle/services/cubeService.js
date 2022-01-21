const Cube = require('../models/Cube.js');

const cubeDb = [
    {
        name: 'Rubic Cube #1',
        description: 'sdfgsetgetg',
        imageUrl: 'https://media.techeblog.com/images/rubiks_cubes.jpg',
        difficulty: '4'
      }
];

const getAll = () => cubeDb.slice(); 

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDb.push(cube);
}

const cubeService = {
    create,
    getAll
}

module.exports = cubeService;