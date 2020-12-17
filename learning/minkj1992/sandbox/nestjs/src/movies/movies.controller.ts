import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { nextTick } from 'process';

@Controller('movies')
export class MoviesController {
  @Get()
  getMovies(): string {
    return 'all movies';
  }

  @Get('/:id')
  getMovie(@Param('id') movieId: string) {
    // router regex 문제가 좀 있네 .. django 만세
    // next() 쓰기 위해서는 helmet middleware 세팅 필요
    // if (!Number.isInteger(movieId)) next();
    return `a movie ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Patch(':/id')
  patchMovie(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }

  @Delete(':/id')
  remove(@Param('id') movieId: string) {}

  @Get('search')
  searchMovie(@Query('year') movieYear: string): string {
    return `search movie with a movie title ${movieYear}`;
  }
}
