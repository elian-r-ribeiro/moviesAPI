import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MoviesService, SearchType } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results! : Observable<any>;
  searchTerms : string = ''; 
  type!: SearchType.all;

  constructor(private moviesService : MoviesService){}

  ngOnInit() {}

  search(){
    console.log(this.searchTerms);
    this.results = this.moviesService.searchMovies(this.searchTerms, this.type).pipe(map(results1 => results1['Search']));
}
}
