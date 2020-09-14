const skills = [
    { id: 1, skill: "HTML", learned: true },
    { id: 2, skill: "JAVASCRIPT", learned: true },
    { id: 3, skill: "CSS", learned: true},
    {id: 4, skill: "MONGO", learned: true },
    {id: 5, skill: "NODE JS", learned: true }
];
module.exports = {
    deleteOne,
    create,
    getAll,
    getOne,
    
    
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 10000000;
    skill.learned = false;
    skills.push(skill);
}
function getAll() {
    return skills;
}
function getOne(id) {
    return skills.find((skill) => skill.id === parseInt(id));
}