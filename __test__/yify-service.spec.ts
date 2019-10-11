import mockAxios from 'jest-mock-axios'
import { MoviePayload, MoviesPayload, Order, Sort, YifyService } from '../src'
import {
  sampleMovieResponse,
  sampleMoviesResponse,
  sampleSuggestionsResponse,
} from './sample'

describe('Yify API', () => {
  let yifyService: YifyService

  beforeAll(() => {
    yifyService = new YifyService()
  })

  describe('get movies', () => {
    afterEach(() => {
      mockAxios.reset()
    })

    it('returns a movie list', async () => {
      const { get } = mockAxios
      get.mockResolvedValue(sampleMoviesResponse)

      const response = await yifyService.getMovies()

      expect(get).toHaveBeenCalledTimes(1)
      expect(get).toHaveBeenCalledWith(
        'https://yts.lt/api/v2/list_movies.json',
        { params: undefined },
      )
      expect(response).toStrictEqual(sampleMoviesResponse.data)
    })

    it('throws when an error occurs', () => {
      const { get } = mockAxios
      get.mockRejectedValue('rejected')

      expect(yifyService.getMovies()).rejects.toThrow()
    })

    it.each([
      { limit: 1 },
      { genre: 'test' },
      { minimum_rating: 1 },
      { order_by: Order.ASC },
      { page: 1 },
      { query_term: 'test' },
      { sort_by: Sort.DATE_ADDED },
      { with_rt_ratings: true },
      {
        limit: 1,
        genre: 'test',
        minimum_rating: 1,
        order_by: Order.ASC,
        page: 1,
        query_term: 'test',
        sort_by: Sort.DATE_ADDED,
        with_rt_ratings: true,
      },
    ] as MoviesPayload[])(
      'calls the api with the params %o',
      async (params: MoviesPayload) => {
        const { get } = mockAxios
        get.mockResolvedValue([])

        await yifyService.getMovies(params)

        expect(get).toHaveBeenCalledTimes(1)
        expect(get).toHaveBeenCalledWith(
          'https://yts.lt/api/v2/list_movies.json',
          {
            params,
          },
        )
      },
    )
  })

  describe('get movie', () => {
    afterEach(() => {
      mockAxios.reset()
    })

    it('returns a movie', async () => {
      const { get } = mockAxios
      get.mockResolvedValue(sampleMovieResponse)

      const response = await yifyService.getMovie({ movie_id: 10 })

      expect(get).toHaveBeenCalledTimes(1)
      expect(get).toHaveBeenCalledWith(
        'https://yts.lt/api/v2/movie_details.json',
        {
          params: { movie_id: 10 },
        },
      )
      expect(response).toStrictEqual(sampleMovieResponse.data)
    })

    it('throws when an error occurs', () => {
      const { get } = mockAxios
      get.mockRejectedValue('rejected')

      expect(yifyService.getMovie({ movie_id: 10 })).rejects.toThrow()
    })

    it.each([
      { movie_id: 10, with_cast: true },
      { movie_id: 10, with_images: true },
      { movie_id: 10, with_cast: true, with_images: true },
    ] as MoviePayload[])(
      'calls the api with the params %o',
      async (params: MoviePayload) => {
        const { get } = mockAxios
        get.mockResolvedValue([])

        await yifyService.getMovie(params)
        expect(get).toHaveBeenCalledWith(
          'https://yts.lt/api/v2/movie_details.json',
          {
            params,
          },
        )
      },
    )
  })

  describe('get suggestions', () => {
    afterEach(() => {
      mockAxios.reset()
    })

    it('get suggestions', async () => {
      const { get } = mockAxios
      get.mockResolvedValue(sampleSuggestionsResponse)

      const response = await yifyService.getSuggestions({ movie_id: 10 })

      expect(get).toHaveBeenCalledTimes(1)
      expect(get).toHaveBeenCalledWith(
        'https://yts.lt/api/v2/movie_suggestions.json',
        {
          params: { movie_id: 10 },
        },
      )
      expect(response).toStrictEqual(sampleSuggestionsResponse.data)
    })

    it('throws when an error occurs', () => {
      const { get } = mockAxios
      get.mockRejectedValue('rejected')

      expect(yifyService.getSuggestions({ movie_id: 10 })).rejects.toThrow()
    })
  })
})
