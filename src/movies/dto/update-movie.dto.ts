import { IsString, IsNumber } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {} // this Dto is similar to CreateMovieDto, but each elements are not mandatory parts.
