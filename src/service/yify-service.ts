import axios from 'axios'
import {
  MoviePayload,
  MovieResponse,
  MoviesPayload,
  MoviesResponse,
  MovieSuggestionsPayload,
  YifyResponse,
} from '../models'

export class YifyService {
  constructor(private readonly baseUrl?: string) {}

  async getMovies(params?: MoviesPayload) {
    const { data } = await axios
      .get<YifyResponse<MoviesResponse>>(
        `${this.baseUrl || 'https://yts.lt/api/v2/'}list_movies.json`,
        {
          params,
        },
      )
      .catch(e => {
        throw new Error(e)
      })

    return data
  }

  async getMovie(params: MoviePayload) {
    const { data } = await axios
      .get<YifyResponse<MovieResponse>>(
        `${this.baseUrl || 'https://yts.lt/api/v2/'}movie_details.json`,
        {
          params,
        },
      )
      .catch(e => {
        throw new Error(e)
      })

    return data
  }

  async getSuggestions(params: MovieSuggestionsPayload) {
    const { data } = await axios
      .get<YifyResponse<MoviesResponse>>(
        `${this.baseUrl || 'https://yts.lt/api/v2/'}movie_suggestions.json`,
        { params },
      )
      .catch(e => {
        throw new Error(e)
      })

    return data
  }
}
