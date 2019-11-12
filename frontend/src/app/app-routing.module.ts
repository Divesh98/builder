import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { GoliveComponent } from './golive/golive.component';
import { LiveComponent } from './live/live.component';
import { QuizGuard } from './guards/quiz.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Next1Component } from './next1/next1.component';
import { Golive1Component } from './golive1/golive1.component';
import { Live1Component } from './live1/live1.component';


const routes: Routes = [
  
  // {
  //   path:"preview",component:GoliveComponent,canActivate:[AuthGuard]

  // },
  // {
  //   path:"live",component:LiveComponent,canActivate:[AuthGuard]
  // },
  // {
  //   path:"next",component:NextpageComponent,canActivate:[AuthGuard]
  // },
  // {
  //   path:"",component:NextpageComponent
  // }
  // {
  //   path:"preview",component:GoliveComponent

  // },
  {
    path:"live",component:LiveComponent
  },
  {
    path:"live1",component:Live1Component

  },
  {
    path:"next",component:NextpageComponent,canActivate:[AuthGuard]
  },
  {
    path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]
  },
  {
    path:"preview",component:GoliveComponent,canActivate:[AuthGuard]
  },
  {
    path:"next1",component:Next1Component,canActivate:[AuthGuard]
  },
  {
    path:"preview1",component:Golive1Component,canActivate:[AuthGuard]

  },
  {
    path:"",component:NextpageComponent
  }

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
