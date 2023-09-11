import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { Photo } from 'src/app/interfaces/http-interface';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private route: ActivatedRoute,private http:HttpClient,private LoadingService : LoadingService) {}

  text : string | null = this.route.snapshot.paramMap.get('id');
  photos : Photo[] = [];
  error : string = "";

  ngOnInit(): void {
    this.getData(1);
  }

  getData(page : number) {
    this.setLoading(true);
    this.http.get(environment.API_URL+  `search/?per_page=40&page=${page}&query=${this.text}`,{
      headers:{
        authorization : environment.API_KEY
      }
    }).subscribe((response : any)=>{
      this.photos = response.photos
      if (response.photos.length === 0) 
        this.error = "Oops! Something went wrong. We couldn't find any results for your query. Please try a different search term or check your spelling."
      this.setLoading(false); 
    },(error : any)=>{
      this.error = "Oops! Something went wrong. We couldn't find any results for your query. Please try a different search term or check your spelling." 
      this.setLoading(false); 
    })
  }

  getLoading() {
    return this.LoadingService.getLoading()
  }

  setLoading(loading : boolean) {
    this.LoadingService.setLoading(loading)
  } 

}
