import { Component,Input } from '@angular/core';
import { Photo } from 'src/app/interfaces/http-interface';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() photos : Photo[] | undefined
  constructor(private LoadingService : LoadingService) {}

  getLoading() {
    return this.LoadingService.getLoading();
  }
}
