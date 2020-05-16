import { updateMovie } from '../services/movieService.js'

export default async ({ params, request, response }) => {
  const movieId = params.id

  if (!movieId) {
    response.status = 400
    response.body = { msg: 'Invalid movie id' }
    return
  }

  if (!request.hasBody) {
    response.status = 400
    response.body = { msg: 'Invalid movie data' }
    return
  }

  const {
    value: { name, genre, is_animated },
  } = await request.body()

  await updateMovie(movieId, { name, genre, is_animated })

  response.body = { msg: 'Movie updated' }
}
