import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {
  infor! : any;
  constructor(private actRoute : ActivatedRoute, private movieService : MoviesService) {
    
   }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.movieService.searchDetailed(id).subscribe(result => {
      this.infor = result;
    });
  }

  openSite(){
    window.open(this.infor.Website, '_blank');
  }

}
