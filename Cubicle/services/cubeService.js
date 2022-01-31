const Cube = require('../models/Cube.js');
const Accessory = require('../models/Accessorie.js');


const getAll = () => {
  let cubes = Cube.find({}).lean(); 
  return cubes;
}

const getCubeById = (id) => Cube.findById(id).populate('accessories').lean();

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube({ name, description, imageUrl, difficulty });

    return cube.save();
}

const attachAccessory = async (cubeId, accessoryId) => {

  const cube = await Cube.findById(cubeId);

  const accessory = await Accessory.findById(accessoryId);

  cube.accessories.push(accessory);

  return cube.save();
}

const searchLogic = async (text, from, to) => {

  let cubes = await getAll();

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
    searchLogic,
    attachAccessory
}

module.exports = cubeService;