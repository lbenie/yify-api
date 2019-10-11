import { MovieResponse, MoviesResponse, Quality, YifyResponse } from '../../src'

export const sampleMoviesResponse: YifyResponse<MoviesResponse> = {
  status: 'ok',
  status_message: 'Query was successful',
  data: {
    movie_count: 13536,
    limit: 1,
    page_number: 1,
    movies: [
      {
        id: 13911,
        url: 'https://yts.lt/movie/fronteras-2018',
        imdb_code: 'tt7308310',
        title: 'Fronteras',
        title_english: 'Fronteras',
        title_long: 'Fronteras (2018)',
        slug: 'fronteras-2018',
        year: 2018,
        rating: 0,
        runtime: 105,
        genres: ['Drama'],
        summary:
          'A Hispanic Border Patrol Agent has his morals challenged when a life-threatening narcotic sweeps through the South West. Reyes finds himself in the Gray area between right and wrong in this Action packed Drama that tackles the immigration obstacles he faces everyday. When a new task force arrives to help contain the problem, Reyes will question everything he has been taught to stand for.',
        description_full:
          'A Hispanic Border Patrol Agent has his morals challenged when a life-threatening narcotic sweeps through the South West. Reyes finds himself in the Gray area between right and wrong in this Action packed Drama that tackles the immigration obstacles he faces everyday. When a new task force arrives to help contain the problem, Reyes will question everything he has been taught to stand for.',
        synopsis:
          'A Hispanic Border Patrol Agent has his morals challenged when a life-threatening narcotic sweeps through the South West. Reyes finds himself in the Gray area between right and wrong in this Action packed Drama that tackles the immigration obstacles he faces everyday. When a new task force arrives to help contain the problem, Reyes will question everything he has been taught to stand for.',
        yt_trailer_code: '',
        language: 'English',
        mpa_rating: '',
        background_image:
          'https://yts.lt/assets/images/movies/fronteras_2018/background.jpg',
        background_image_original:
          'https://yts.lt/assets/images/movies/fronteras_2018/background.jpg',
        small_cover_image:
          'https://yts.lt/assets/images/movies/fronteras_2018/small-cover.jpg',
        medium_cover_image:
          'https://yts.lt/assets/images/movies/fronteras_2018/medium-cover.jpg',
        large_cover_image:
          'https://yts.lt/assets/images/movies/fronteras_2018/large-cover.jpg',
        state: 'ok',
        torrents: [
          {
            url:
              'https://yts.lt/torrent/download/3AB80BADE8C508D2140FB15725E22D428C4AEA1C',
            hash: '3AB80BADE8C508D2140FB15725E22D428C4AEA1C',
            quality: Quality.SEVEN_TWENTY_P,
            type: 'web',
            seeds: 40,
            peers: 60,
            size: '945.67 MB',
            size_bytes: 991606866,
            date_uploaded: '2019-10-11 11:32:04',
            date_uploaded_unix: 1570786324,
          },
          {
            url:
              'https://yts.lt/torrent/download/3D969621B3FCCED7BA94C005C3C04061EB824FAA',
            hash: '3D969621B3FCCED7BA94C005C3C04061EB824FAA',
            quality: Quality.TEN_EIGHTY_P,
            type: 'web',
            seeds: 0,
            peers: 0,
            size: '1.66 GB',
            size_bytes: 1782411428,
            date_uploaded: '2019-10-11 13:12:46',
            date_uploaded_unix: 1570792366,
          },
        ],
        date_uploaded: '2019-10-11 11:32:04',
        date_uploaded_unix: 1570786324,
      },
    ],
  },
  '@meta': {
    server_time: 1570794917,
    server_timezone: 'CET',
    api_version: 2,
    execution_time: '0 ms',
  },
}

export const sampleMovieResponse: YifyResponse<MovieResponse> = {
  status: 'ok',
  status_message: 'Query was successful',
  data: {
    movie: {
      id: 10,
      url: 'https://yts.lt/movie/13-2010',
      imdb_code: 'tt0798817',
      title: '13',
      title_english: '13',
      title_long: '13 (2010)',
      slug: '13-2010',
      year: 2010,
      rating: 6.1,
      runtime: 91,
      genres: ['Action', 'Crime', 'Drama', 'Thriller'],
      download_count: 235099,
      like_count: 256,
      description_intro:
        "In Talbot, Ohio, a father's need for surgeries puts the family in a financial bind. His son Vince, an electrician, overhears a man talking about making a fortune in just a day. When the man overdoses on drugs, Vince finds instructions and a cell phone that the man has received and substitutes himself: taking a train to New York and awaiting contact. He has no idea what it's about. He ends up at a remote house where wealthy men bet on who will survive a complicated game of Russian roulette: he's number 13. In flashbacks we meet other contestants, including a man whose brother takes him out of a mental institution in order to compete. Can Vince be the last one standing?",
      description_full:
        "In Talbot, Ohio, a father's need for surgeries puts the family in a financial bind. His son Vince, an electrician, overhears a man talking about making a fortune in just a day. When the man overdoses on drugs, Vince finds instructions and a cell phone that the man has received and substitutes himself: taking a train to New York and awaiting contact. He has no idea what it's about. He ends up at a remote house where wealthy men bet on who will survive a complicated game of Russian roulette: he's number 13. In flashbacks we meet other contestants, including a man whose brother takes him out of a mental institution in order to compete. Can Vince be the last one standing?",
      yt_trailer_code: 'Y41fFj-P4jI',
      language: 'English',
      mpa_rating: 'R',
      background_image:
        'https://yts.lt/assets/images/movies/13_2010/background.jpg',
      background_image_original:
        'https://yts.lt/assets/images/movies/13_2010/background.jpg',
      small_cover_image:
        'https://yts.lt/assets/images/movies/13_2010/small-cover.jpg',
      medium_cover_image:
        'https://yts.lt/assets/images/movies/13_2010/medium-cover.jpg',
      large_cover_image:
        'https://yts.lt/assets/images/movies/13_2010/large-cover.jpg',
      torrents: [
        {
          url:
            'https://yts.lt/torrent/download/BE046ED20B048C4FB86E15838DD69DADB27C5E8A',
          hash: 'BE046ED20B048C4FB86E15838DD69DADB27C5E8A',
          quality: Quality.SEVEN_TWENTY_P,
          type: 'bluray',
          seeds: 15,
          peers: 4,
          size: '946.49 MB',
          size_bytes: 992466698,
          date_uploaded: '2015-10-31 20:46:37',
          date_uploaded_unix: 1446320797,
        },
      ],
      date_uploaded: '2015-10-31 20:46:37',
      date_uploaded_unix: 1446320797,
    },
  },
  '@meta': {
    server_time: 1570794917,
    server_timezone: 'CET',
    api_version: 2,
    execution_time: '0 ms',
  },
}

export const sampleSuggestionsResponse: YifyResponse<MoviesResponse> = {
  status: 'ok',
  status_message: 'Query was successful',
  data: {
    movie_count: 4,
    movies: [
      {
        id: 5429,
        url: 'https://yts.lt/movie/white-ghost-1988',
        imdb_code: 'tt0096436',
        title: 'White Ghost',
        title_english: 'White Ghost',
        title_long: 'White Ghost (1988)',
        slug: 'white-ghost-1988',
        year: 1988,
        rating: 4.5,
        runtime: 0,
        genres: ['Action', 'Adventure', 'War'],
        summary:
          'An M.I.A. US soldier nicknamed White Ghost lives in hiding in the jungles of communist Vietnam. The US army finds out about him and sends a black ops team to rescue him. However, the team is lead by a man who wants White Ghost dead.',
        description_full:
          'An M.I.A. US soldier nicknamed White Ghost lives in hiding in the jungles of communist Vietnam. The US army finds out about him and sends a black ops team to rescue him. However, the team is lead by a man who wants White Ghost dead.',
        synopsis:
          'An M.I.A. US soldier nicknamed White Ghost lives in hiding in the jungles of communist Vietnam. The US army finds out about him and sends a black ops team to rescue him. However, the team is lead by a man who wants White Ghost dead.',
        yt_trailer_code: 'th7Zo9FYwik',
        language: 'English',
        mpa_rating: '',
        background_image:
          'https://yts.lt/assets/images/movies/white_ghost_1988/background.jpg',
        background_image_original:
          'https://yts.lt/assets/images/movies/white_ghost_1988/background.jpg',
        small_cover_image:
          'https://yts.lt/assets/images/movies/white_ghost_1988/small-cover.jpg',
        medium_cover_image:
          'https://yts.lt/assets/images/movies/white_ghost_1988/medium-cover.jpg',
        state: 'ok',
        torrents: [
          {
            url:
              'https://yts.lt/torrent/download/39350F1B320793B8CE787AFD9C8E7D97D1F9CDE1',
            hash: '39350F1B320793B8CE787AFD9C8E7D97D1F9CDE1',
            quality: Quality.SEVEN_TWENTY_P,
            seeds: 2,
            peers: 2,
            size: '670.62 MB',
            size_bytes: 703196037,
            date_uploaded: '2016-04-16 22:40:00',
            date_uploaded_unix: 1460839200,
          },
          {
            url:
              'https://yts.lt/torrent/download/C24C5A5DF05FC9CFDC8F8C3B0BE6A5D89D2C9DD0',
            hash: 'C24C5A5DF05FC9CFDC8F8C3B0BE6A5D89D2C9DD0',
            quality: Quality.TEN_EIGHTY_P,
            seeds: 4,
            peers: 1,
            size: '1.4 GB',
            size_bytes: 1503238554,
            date_uploaded: '2016-04-17 02:24:45',
            date_uploaded_unix: 1460852685,
          },
        ],
        date_uploaded: '2016-04-16 22:40:00',
        date_uploaded_unix: 1460839200,
      },
      {
        id: 1976,
        url: 'https://yts.lt/movie/man-on-a-ledge-2012',
        imdb_code: 'tt1568338',
        title: 'Man on a Ledge',
        title_english: 'Man on a Ledge',
        title_long: 'Man on a Ledge (2012)',
        slug: 'man-on-a-ledge-2012',
        year: 2012,
        rating: 6.6,
        runtime: 102,
        genres: ['Action', 'Adventure', 'Crime', 'Thriller'],
        summary:
          "An ex-cop-turned-con threatens to jump to his death from a Manhattan hotel. The nearest New York Police Officer immediately responds to a screaming woman and calls dispatch. More officers arrive with SWAT and tactical command along with firefighters. The police then dispatch a police psychologist personally requested to talk him down from the ledge. However, things aren't as they seem.",
        description_full:
          "An ex-cop-turned-con threatens to jump to his death from a Manhattan hotel. The nearest New York Police Officer immediately responds to a screaming woman and calls dispatch. More officers arrive with SWAT and tactical command along with firefighters. The police then dispatch a police psychologist personally requested to talk him down from the ledge. However, things aren't as they seem.",
        synopsis:
          "An ex-cop-turned-con threatens to jump to his death from a Manhattan hotel. The nearest New York Police Officer immediately responds to a screaming woman and calls dispatch. More officers arrive with SWAT and tactical command along with firefighters. The police then dispatch a police psychologist personally requested to talk him down from the ledge. However, things aren't as they seem.",
        yt_trailer_code: 'sBJSfqdhyTg',
        language: 'English',
        mpa_rating: 'PG-13',
        background_image:
          'https://yts.lt/assets/images/movies/Man_on_a_Ledge_2012/background.jpg',
        background_image_original:
          'https://yts.lt/assets/images/movies/Man_on_a_Ledge_2012/background.jpg',
        small_cover_image:
          'https://yts.lt/assets/images/movies/Man_on_a_Ledge_2012/small-cover.jpg',
        medium_cover_image:
          'https://yts.lt/assets/images/movies/Man_on_a_Ledge_2012/medium-cover.jpg',
        state: 'ok',
        torrents: [
          {
            url:
              'https://yts.lt/torrent/download/B159C2EE2A86A81175405312EFB8ABE474F9BE68',
            hash: 'B159C2EE2A86A81175405312EFB8ABE474F9BE68',
            quality: Quality.SEVEN_TWENTY_P,
            seeds: 28,
            peers: 4,
            size: '650.61 MB',
            size_bytes: 682214031,
            date_uploaded: '2015-11-01 01:00:07',
            date_uploaded_unix: 1446336007,
          },
        ],
        date_uploaded: '2015-11-01 01:00:07',
        date_uploaded_unix: 1446336007,
      },
      {
        id: 1093,
        url: 'https://yts.lt/movie/evil-dead-2013',
        imdb_code: 'tt1288558',
        title: 'Evil Dead',
        title_english: 'Evil Dead',
        title_long: 'Evil Dead (2013)',
        slug: 'evil-dead-2013',
        year: 2013,
        rating: 6.5,
        runtime: 91,
        genres: ['Action', 'Fantasy', 'Horror', 'Thriller'],
        summary:
          'Five twenty-something friends become holed up in a remote cabin. When they discover a Book of the Dead, they unwittingly summon up dormant demons living in the nearby woods, which possess the youngsters in succession until only one is left intact to fight for survival.',
        description_full:
          'Five twenty-something friends become holed up in a remote cabin. When they discover a Book of the Dead, they unwittingly summon up dormant demons living in the nearby woods, which possess the youngsters in succession until only one is left intact to fight for survival.',
        synopsis:
          'Five twenty-something friends become holed up in a remote cabin. When they discover a Book of the Dead, they unwittingly summon up dormant demons living in the nearby woods, which possess the youngsters in succession until only one is left intact to fight for survival.',
        yt_trailer_code: 'FKFDkpHCQz4',
        language: 'English',
        mpa_rating: 'R',
        background_image:
          'https://yts.lt/assets/images/movies/Evil_Dead_2013/background.jpg',
        background_image_original:
          'https://yts.lt/assets/images/movies/Evil_Dead_2013/background.jpg',
        small_cover_image:
          'https://yts.lt/assets/images/movies/Evil_Dead_2013/small-cover.jpg',
        medium_cover_image:
          'https://yts.lt/assets/images/movies/Evil_Dead_2013/medium-cover.jpg',
        state: 'ok',
        torrents: [
          {
            url:
              'https://yts.lt/torrent/download/6CA9BF06F0B1419A8ED6CBC4E922C270DF20B662',
            hash: '6CA9BF06F0B1419A8ED6CBC4E922C270DF20B662',
            quality: Quality.SEVEN_TWENTY_P,
            seeds: 111,
            peers: 19,
            size: '751.23 MB',
            size_bytes: 787721748,
            date_uploaded: '2015-10-31 23:19:04',
            date_uploaded_unix: 1446329944,
          },
          {
            url:
              'https://yts.lt/torrent/download/854800D77EE9F85F0883D29A1C3DDF1E701C1C17',
            hash: '854800D77EE9F85F0883D29A1C3DDF1E701C1C17',
            quality: Quality.TEN_EIGHTY_P,
            seeds: 56,
            peers: 11,
            size: '1.44 GB',
            size_bytes: 1546188227,
            date_uploaded: '2015-10-31 23:19:05',
            date_uploaded_unix: 1446329945,
          },
        ],
        date_uploaded: '2015-10-31 23:19:04',
        date_uploaded_unix: 1446329944,
      },
      {
        id: 8778,
        url: 'https://yts.lt/movie/blood-fest-2018',
        imdb_code: 'tt7208564',
        title: 'Blood Fest',
        title_english: 'Blood Fest',
        title_long: 'Blood Fest (2018)',
        slug: 'blood-fest-2018',
        year: 2018,
        rating: 5.3,
        runtime: 92,
        genres: ['Action', 'Comedy', 'Horror'],
        summary:
          'Fans flock to a festival celebrating the most iconic horror movies, only to discover that the charismatic showman behind the event has a diabolical agenda. As festival attendees start dying off, three teenagers - more schooled in horror-film cliches than practical knowledge about neutralizing psycho killers - must band together and battle through various madmen and monstrosities to survive.',
        description_full:
          'Fans flock to a festival celebrating the most iconic horror movies, only to discover that the charismatic showman behind the event has a diabolical agenda. As festival attendees start dying off, three teenagers - more schooled in horror-film cliches than practical knowledge about neutralizing psycho killers - must band together and battle through various madmen and monstrosities to survive.',
        synopsis:
          'Fans flock to a festival celebrating the most iconic horror movies, only to discover that the charismatic showman behind the event has a diabolical agenda. As festival attendees start dying off, three teenagers - more schooled in horror-film cliches than practical knowledge about neutralizing psycho killers - must band together and battle through various madmen and monstrosities to survive.',
        yt_trailer_code: 'qsSjYWbD4kY',
        language: 'English',
        mpa_rating: '',
        background_image:
          'https://yts.lt/assets/images/movies/blood_fest_2018/background.jpg',
        background_image_original:
          'https://yts.lt/assets/images/movies/blood_fest_2018/background.jpg',
        small_cover_image:
          'https://yts.lt/assets/images/movies/blood_fest_2018/small-cover.jpg',
        medium_cover_image:
          'https://yts.lt/assets/images/movies/blood_fest_2018/medium-cover.jpg',
        state: 'ok',
        torrents: [
          {
            url:
              'https://yts.lt/torrent/download/F1522CF14974EA9B42230A0DF4654278E2AAC4CE',
            hash: 'F1522CF14974EA9B42230A0DF4654278E2AAC4CE',
            quality: Quality.SEVEN_TWENTY_P,
            seeds: 8,
            peers: 1,
            size: '791.8 MB',
            size_bytes: 830262477,
            date_uploaded: '2018-11-12 04:58:52',
            date_uploaded_unix: 1541995132,
          },
          {
            url:
              'https://yts.lt/torrent/download/BB2E0E3222AF26FF7F33F8DD8F38874209672272',
            hash: 'BB2E0E3222AF26FF7F33F8DD8F38874209672272',
            quality: Quality.TEN_EIGHTY_P,
            seeds: 7,
            peers: 4,
            size: '1.49 GB',
            size_bytes: 1599875318,
            date_uploaded: '2018-11-12 06:47:35',
            date_uploaded_unix: 1542001655,
          },
          {
            url:
              'https://yts.lt/torrent/download/B231844562D028FB4F93B6206CF5913F8CF9D21F',
            hash: 'B231844562D028FB4F93B6206CF5913F8CF9D21F',
            quality: Quality.SEVEN_TWENTY_P,
            seeds: 7,
            peers: 2,
            size: '788.19 MB',
            size_bytes: 826477117,
            date_uploaded: '2018-08-31 15:14:37',
            date_uploaded_unix: 1535721277,
          },
          {
            url:
              'https://yts.lt/torrent/download/FFAF1D4C1621FF9B80D8BC6DF094B2A4594FD459',
            hash: 'FFAF1D4C1621FF9B80D8BC6DF094B2A4594FD459',
            quality: Quality.TEN_EIGHTY_P,
            seeds: 8,
            peers: 2,
            size: '1.48 GB',
            size_bytes: 1589137900,
            date_uploaded: '2018-08-31 17:03:41',
            date_uploaded_unix: 1535727821,
          },
        ],
        date_uploaded: '2018-08-31 15:14:37',
        date_uploaded_unix: 1535721277,
      },
    ],
  },
  '@meta': {
    server_time: 1570820485,
    server_timezone: 'CET',
    api_version: 2,
    execution_time: '0 ms',
  },
}
