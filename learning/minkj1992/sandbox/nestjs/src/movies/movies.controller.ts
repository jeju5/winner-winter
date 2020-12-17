import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getMovies() {
    return 'all movies';
  }

  @Get('/:id')
  getMovie(@Param('id') movieId: string) {
    return `a movie ${movieId}`;
  }

  @Post()
  create() {}

  @Patch(':/id')
  patchMovie(@Param('id') movieId: string) {}

  @Delete(':/id')
  remove(@Param('id') movieId: string) {}
}
