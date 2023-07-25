const router = require('express').Router();
const users = require('./users');
const movies = require('./movie');
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');

const {
  loginValidation,
  createUserValidation,
} = require('../middlewares/validationJoi');

const NotFoundError = require('../errors/NotFoundError');

router.post('/signin', loginValidation, login);
router.post('/signup', createUserValidation, createUser);
router.use(auth);
router.use(users);
router.use(movies);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не существует'));
});

module.exports = router;
