import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService, SearchType } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results! : Observable<any>;
  searchTerms : string = 'fast'; 
  type!: SearchType.all;

  constructor(private moviesService : MoviesService){}

  ngOnInit() {
    this.search();
    console.log(this.results);
  }

  search(){
    console.log(this.searchTerms);
    this.results = this.moviesService.searchMovies(this.searchTerms, this.type);
    this.results.subscribe(data => {
      console.log(data)
    })
}
}
