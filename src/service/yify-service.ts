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
    try {
      const { data } = await axios.get<YifyResponse<MoviesResponse>>(
        `${this.baseUrl || 'https://yts.lt/api/v2/'}list_movies.json`,
        {
          params,
        },
      )

      return data
    } catch (e) {
      throw new Error(e)
    }
  }

  async getMovie(params: MoviePayload) {
    try {
      const { data } = await axios.get<YifyResponse<MovieResponse>>(
        `${this.baseUrl || 'https://yts.lt/api/v2/'}movie_details.json`,
        {
          params,
        },
      )

      return data
    } catch (e) {
      throw new Error(e)
    }
  }

  async getSuggestions(params: MovieSuggestionsPayload) {
    try {
      const { data } = await axios.get<YifyResponse<MoviesResponse>>(
        `${this.baseUrl || 'https://yts.lt/api/v2/'}movie_suggestions.json`,
        { params },
      )

      return data
    } catch (e) {
      throw new Error(e)
    }
  }
}
