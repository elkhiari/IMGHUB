import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { SourceComponent } from './pages/source/source.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'search/:id', component: SearchComponent},
  {path:'source', component: SourceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
