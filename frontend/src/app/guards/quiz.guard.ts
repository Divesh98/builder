import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlldataService } from '../service/alldata.service';

@Injectable({
  providedIn: 'root'
})
export class QuizGuard implements CanActivate {
  constructor(private alldataservice:AlldataService,private router:Router){}
  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if(this.alldataservice.quizGuard()){
      console.log("guard");
  
      return true

    }
    else{
      console.log("im else");
      this.router.navigate(['/login'])
     
      return false
    }
  }
  
}
