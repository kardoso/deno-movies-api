import client from '../db/database.js'

class MovieRepo {
  create(movie) {
    return client.query(
      'INSERT INTO movies (name, genre, is_animated, addition_date) VALUES ($1, $2, $3, $4)',
      movie.name,
      movie.genre,
      movie.is_animated,
      movie.addition_date
    )
  }

  selectAll() {
    return client.query('SELECT * FROM movies ORDER BY id')
  }

  selectById(id) {
    return client.query(`SELECT * FROM movies WHERE id = $1`, id)
  }

  update(id, movie) {
    var query = `UPDATE movies `
    var hasSet = false
    if (movie.name !== undefined) {
      query +=
        ` SET name = '${movie.name}'` + (movie.genre !== undefined ? ',' : '')
      hasSet = true
    }

    if (movie.genre !== undefined) {
      if (!hasSet) query += ' SET '
      query +=
        ` genre = '${movie.genre}'` +
        (movie.is_animated !== undefined ? ',' : '')
      hasSet = true
    }

    if (movie.is_animated !== undefined) {
      if (!hasSet) query += ' SET '
      query += ` is_animated = '${movie.is_animated}'`
    }

    query += ` WHERE id = ${id}`
    return client.query(query)
  }

  delete(id) {
    return client.query(`DELETE FROM movies WHERE id = $1`, id)
  }
}

export default new MovieRepo()
