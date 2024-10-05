import { Component } from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS } from '../../constants/film.constants';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent {
  // public films: Film[] = FILMS

  constructor(
    private _filmsService: FilmsService
  ){}

  public get films(): Film[] {
    return this._filmsService.filteredFilms
  }
}

