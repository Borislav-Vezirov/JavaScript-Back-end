const Cube = require('../models/Cube.js');


const getAll = () => {
  let cubes = Cube.find({}).lean(); 
  return cubes;
}

const getCubeById = (id) => Cube.findById(id).lean();

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube({ name, description, imageUrl, difficulty });

    return cube.save();
}

const searchLogic = (text, from, to) => {

  let cubes = getAll();

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