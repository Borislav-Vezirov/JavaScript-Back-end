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
      },
      
      {
        id: '8pqfb1ckypjjlst',
        name: 'Ice Cube',
        description: 'gthtrdhrthty',
        imageUrl: 'https://i.guim.co.uk/img/media/67eec8ab7e348a4152ff3f0ea2a3fc1060f38e28/493_44_4711_2827/master/4711.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=589f464f44bbf828e4defbc819fabcae',
        difficulty: '1'
      }
];

const getAll = () => cubeDb.slice(); 

const getCubeById = (id) => cubeDb.find(x => x.id == id);

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube(name, description, imageUrl, difficulty);

    console.log(cube);

    cubeDb.push(cube);
}

const searchLogic = (text, from, to) => {

  let cubes = cubeDb.slice();

  if(text){
    cubes = cubes.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
  };

  if(from){
    cubes = cubes.filter(x => Number(x.difficulty) >= Number(from));
  };

  if(to){
    cubes = cubes.filter(x => Number(x.difficulty) <= Number(to));
  }

  return cubes;
}


const cubeService = {
    create,
    getAll,
    getCubeById,
    searchLogic
}

module.exports = cubeService;