import { Component,OnInit, HostListener } from '@angular/core';
import { environment } from 'src/environment';
import { HttpClient } from '@angular/common/http';
import { Photo } from 'src/app/interfaces/http-interface';
import { LoadingService } from 'src/app/services/loading.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient,private LoadingService : LoadingService ) {}

  private API_KEY : string  = environment.API_KEY
  private API_URL : string = environment.API_URL
  data : Photo[] | undefined  
  loading : boolean = true

  ngOnInit() : void {
    this.getData(1)
  }

  getData(page : number) {
    this.setLoading(true)
    this.http.get(this.API_URL+'curated?per_page=40&page='+page,{
      headers: {
        Authorization : this.API_KEY
      }
    }).subscribe((response : any)=>{
      this.data = response.photos;
      this.setLoading(false)
    },(error)=>{
      console.log(error)
    })
  }

  setLoading(loading : boolean) {
    this.LoadingService.setLoading(loading)
  }

  getLoading() {
    return this.LoadingService.getLoading();
  }
}
