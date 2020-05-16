import { Router } from 'https://deno.land/x/oak/mod.ts'

import getMovies from './controllers/getMovies.js'
import getMovieDetails from './controllers/getMovieDetails.js'
import createMovie from './controllers/createMovie.js'
import updateMovie from './controllers/updateMovie.js'
import deleteMovie from './controllers/deleteMovie.js'

const router = new Router()

router
  .get('/movies', getMovies)
  .get('/movies/:id', getMovieDetails)
  .post('/movies', createMovie)
  .put('/movies/:id', updateMovie)
  .delete('/movies/:id', deleteMovie)

export default router
