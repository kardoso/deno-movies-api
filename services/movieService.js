import movieRepo from '../repositories/movieRepo.js'

export const getMovies = async () => {
  const movies = await movieRepo.selectAll()

  var result = new Array()

  movies.rows.map((movie) => {
    var obj = new Object()

    movies.rowDescription.columns.map((el, i) => {
      obj[el.name] = movie[i]
    })
    result.push(obj)
  })

  return result
}

export const getMovie = async (movieId) => {
  const movies = await movieRepo.selectById(movieId)

  var obj = new Object()
  movies.rows.map((movie) => {
    movies.rowDescription.columns.map((el, i) => {
      obj[el.name] = movie[i]
    })
  })

  return obj
}

export const createMovie = async (movieData) => {
  const newMovie = {
    name: String(movieData.name),
    genre: String(movieData.genre),
    is_animated:
      'is_animated' in movieData ? Boolean(movieData.is_animated) : false,
    addition_date: new Date(),
  }

  await movieRepo.create(newMovie)

  return newMovie.id
}

export const updateMovie = async (movieId, movieData) => {
  const movie = await getMovie(movieId)

  if (Object.keys(movie).length === 0 && movie.constructor === Object) {
    throw new Error('Movie not found')
  }

  const updatedMovie = {
    name: movieData.name !== undefined ? String(movieData.name) : movie.name,
    genre:
      movieData.genre !== undefined ? String(movieData.genre) : movie.genre,
    is_animated:
      movieData.is_animated !== undefined
        ? Boolean(movieData.is_animated)
        : movie.is_animated,
  }

  movieRepo.update(movieId, updatedMovie)
}

export const deleteMovie = async (movieId) => {
  movieRepo.delete(movieId)
}
