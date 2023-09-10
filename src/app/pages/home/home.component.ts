import { Component,OnInit, HostListener } from '@angular/core';
import { environment } from 'src/environment';
import { HttpClient } from '@angular/common/http';
import { Photo } from 'src/app/interfaces/http-interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) {}

  private API_KEY : string  = environment.API_KEY
  private API_URL : string = environment.API_URL
  data : Photo[] | undefined  
  loading : boolean = true
  page : number = 1

  ngOnInit() : void {
    this.getData()
  }

  showNextPrevPage(ac : string) {
    if(ac == "next") this.page++ ;
    else this.page-- ;
    this.getData()
  }

  getData() {
    this.loading = true
    this.http.get(this.API_URL+'curated?per_page=40&page='+this.page,{
      headers: {
        Authorization : this.API_KEY
      }
    }).subscribe((response : any)=>{
      this.data = response.photos;
      this.loading = false
    },(error)=>{
      console.log(error)
    })
  }
}
