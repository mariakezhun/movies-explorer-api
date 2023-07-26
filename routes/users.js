const router = require('express').Router();
const {
  getCurrentUser,
  updateUser,
} = require('../controllers/users');

const {
  updateUserValidation,
} = require('../middlewares/validationJoi');

// возвращает информацию о пользователе (email и имя)
router.get('/users/me', getCurrentUser);

// обновляет информацию о пользователе (email и имя)
router.patch('/users/me', updateUserValidation, updateUser);

module.exports = router;
