import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { TermofuseComponent } from './pages/termofuse/termofuse.component';


const routes: Routes = [

  {
    component: HomeComponent,
    path: ''
  },
  {
    component: TermofuseComponent,
    path: 'terms-of-use'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
