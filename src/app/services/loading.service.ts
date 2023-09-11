import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading : boolean = false
  setLoading(loading : boolean) {
    this.loading = loading;
  }
  getLoading() {
    return this.loading;
  }
}
