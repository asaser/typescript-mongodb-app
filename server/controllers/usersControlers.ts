export {}

const User = require('../models/usersModel');

const getUsers = async (_req: any, res: any): Promise<void> => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch(error) {
        res.status(404).json('Error server getUsers: ' + error);
    }
};

const postUsers = async(req: any, res: any) => {
    const username = req.body.username;

    const newUser = new User({
        username,
    });

    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch(error) {
        res.status(404).json('Error server postUser: ' + error);
    }
}

module.exports = {
    getUsers,
    postUsers
}

// export {}

// const User = require('../models/usersModel');

// const getUsers = async (_req: any, res: any): Promise<void> => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch(error) {
//         res.status(404).json('Error server getUsers: ' + error);
//     }
// };

// const postUsers = async(req: any, res: any) => {
//     const username = req.body.username;

//     const newUser = new User({
//         username,
//     });

//     try {
//         await newUser.save();
//         res.status(200).json(newUser);
//     } catch(error) {
//         res.status(404).json('Error server postUser: ' + error);
//     }
// }

// module.exports = {
//     getUsers,
//     postUsers
// }