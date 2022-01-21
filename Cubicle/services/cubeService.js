const Cube = require('../models/Cube.js');

const cubeDb = [
    {
        id: 'dargedrgergerge',
        name: 'Rubic Cube #1',
        description: 'sdfgsetgetg',
        imageUrl: 'https://media.techeblog.com/images/rubiks_cubes.jpg',
        difficulty: '4'
      },

      {
        id: '8pqf20wkyoaivr7',
        name: 'Rubic Cube #2',
        description: 'erfgrthbrthbretgbrt',
        imageUrl: 'https://i.pinimg.com/originals/75/67/75/756775830f533f547e8f7b1267f2111f.jpg',
        difficulty: '6'
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