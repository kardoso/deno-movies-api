import { createMovie } from '../services/movieService.js'

export default async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400
    response.body = { msg: 'Invalid movie data' }
    return
  }

  const {
    value: { name, genre, is_animated },
  } = await request.body()

  if (!name || !genre) {
    response.status = 422
    response.body = { msg: 'Incorrect movie data. Name and genre are required' }
    return
  }

  const movieId = await createMovie({ name, genre, is_animated })

  response.body = { msg: 'Movie created', movieId }
}
