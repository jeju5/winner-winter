import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entity/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((m) => m.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} is not found.`);
    }
    return movie;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  deleteOne(id: string) {
    console.warn(id);
    this.getOne(id);
    this.movies = this.movies.filter((m) => m.id !== +id);
  }

  update(id: string, updateData) {
    // TODO: validate data
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
