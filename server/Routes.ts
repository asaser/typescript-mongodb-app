const router = require('express').Router();

const UsersControlers = require('./controllers/usersControlers') 


router.get('/', async (req:any, res:any) => UsersControlers.getUsers(req, res))
router.post('/', async (req:any, res:any) => UsersControlers.postUsers(req, res))

module.exports = router;



// const router = require('express').Router();
// const { getUsers, postUsers } = require('./controllers/usersControlers');

// router.get('/', getUsers);

// router.post('/', postUsers);

// module.exports = router;