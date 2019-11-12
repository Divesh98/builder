import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChatService } from 'src/app/service/chat.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  abc:boolean;

  constructor(private authService:AuthService,private router:Router,private toast:ToastrService,private chatService:ChatService) { }

  ngOnInit() {
   

     if(this.authService.loggedIn()){
       this.router.navigate(['/dashboard']);
     }
     else{
      this.router.navigate(['/login']);
     }
  }
  onLogout(){
    this.authService.logOut();
    this.toast.success('you are logged out');
    this.router.navigate(['/login']);
  }
  quiz(){
    // this.chatService.setData(true)
   
    this.router.navigate(['/next'])


  }
  chat(){
    // this.chatService.setData(false)
 
    this.router.navigate(['/next1'])
    

  }

}