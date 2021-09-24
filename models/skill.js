const skills = [
    {id: 125223, skill: 'HTML', done: true},
    {id: 127904, skill: 'CSS', done: false},
    {id: 139608, skill: 'JavaScript', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {

    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }

  function getAll() {
    return skills;
  }

  function getOne(id) {

    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {

      skill.id = Date.now() % 1000000;

      skill.done = false;
      skills.push(skill);
  }
  
 