import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private router:Router,private authService:AuthService,private toast:ToastrService) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      this.router.navigate(['/dashboard']);
    }
    else{
      this.router.navigate(['/login']);
    }

    this.loginForm =new FormGroup({
      "email":new FormControl(null,[Validators.required]),
      "password": new FormControl(null,[Validators.required])
    });
  }
  onLogin(){
    this.authService.AuthLogin(this.loginForm.value).subscribe(data=>{
      if(data.success){

        console.log("login value",this.loginForm.value);

        this.authService.storeUserData(data.token,data.user);
        console.log("data",data);
        this.toast.success('you are succesfuuly logged in');
  
        this.router.navigate(['/dashboard']);
      
       

      }
      else{
        this.toast.error(' you are not logged in');
        this.router.navigate(['/login']);
      }
    });
    

  }

}
