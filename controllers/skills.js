const Skill = require('../models/skill');


module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    console.log(req.body, " <--- will be the contents of the form");
    Skill.create(req.body)

    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new.ejs');
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    });
}

function show(req, res) {
    console.log(req.params)
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}

