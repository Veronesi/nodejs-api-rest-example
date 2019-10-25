const controller = {};

controller.getAll = (req, res) => {
    const { users } = req.payload;
    
    res.send({users: users});
}

controller.new = (req, res) => {
    const { users } = req.payload;

    users.push({id: 4, name: 'new user'});

    res.send(users);
}

controller.change = (req, res) => {
    const { users } = req.payload;
    const { id } = req.params;

    users[id - 1].name = 'name changed';

    res.send(users);
}

controller.delete = async (req, res) => {
    const { users } = req.payload;
    const { id } = req.params;

    const newUsers = await users.filter(user => user.id != id )
    res.send(newUsers);
}

controller.getById = (req, res) => {
    const { users } = req.payload;
    const { id } = req.params;

    res.send(users[id - 1]);
}

module.exports = controller;