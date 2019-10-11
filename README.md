# yify-api

[![Build Status](https://travis-ci.org/lbenie/yify-api.svg?branch=master)](https://travis-ci.org/lbenie/yify-api)
[![codecov](https://codecov.io/gh/lbenie/yify-api/branch/master/graph/badge.svg)](https://codecov.io/gh/lbenie/yify-api)
[![Mutation testing badge](https://badge.stryker-mutator.io/github.com/lbenie/yify-api/master)](https://stryker-mutator.github.io)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This module is a JavaScript wrapper around the Yify Torrents api.

## TypeScript

This module is written in TypeScript and provides the typings.

## Usage

```ts
import { YifyService } from 'yify-api'

// apiBaseUrl defaults to: https://yts.lt/api/v2/
const yifyService = new YifyService()

yifyService.getMovies().then(movies => {
  // movies
})
```
