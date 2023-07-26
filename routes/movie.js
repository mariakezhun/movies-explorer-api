const router = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const {
  createMovieValidation,
  deleteMovieByIdValidation,
} = require('../middlewares/validationJoi');

router.get('/movies', getMovies);
router.post('/movies', createMovieValidation, createMovie);
router.delete('/movies/:_id', deleteMovieByIdValidation, deleteMovie);

module.exports = router;
