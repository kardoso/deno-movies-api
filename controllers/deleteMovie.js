import { deleteMovie, getMovie } from '../services/movieService.js'

export default async ({ params, response }) => {
  const movieId = params.id

  if (!movieId) {
    response.status = 400
    response.body = { msg: 'Invalid movie id' }
    return
  }

  const foundMovie = await getMovie(movieId)
  if (!foundMovie) {
    response.status = 404
    response.body = { msg: `Movie with ID ${movieId} not found` }
    return
  }

  await deleteMovie(movieId)
  response.body = { msg: 'Movie deleted' }
}
