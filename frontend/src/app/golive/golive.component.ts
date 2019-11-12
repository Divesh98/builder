import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlldataService } from '../service/alldata.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-golive',
  templateUrl: './golive.component.html',
  styleUrls: ['./golive.component.css']
})
export class GoliveComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private alldataservice:AlldataService,private _formBuilder: FormBuilder,private router:Router,private authService:AuthService,private chatService:ChatService) {
    

   }
   options: {} = {}
  ngdata=[];
  logoimg=[];
  titles=[];
  titlessub=[];
  sbmtbtn=[];
  welcomepagefields=[];
  welcomeplaceholder=[];
  isAnswer=[];
 answer;
 image_logo=[]
 isAnswer1=[]
 
 dddddd=[[],[]];
  
  alldata;
   

  ngOnInit() {
  
    // document.getElementById("quiz").style.visibility="hidden",
    // document.getElementById("chat").style.visibility="hidden"
    
    // if(this.chatService.getData()==true){
    //   document.getElementById("quiz").style.visibility="visible",
    //   document.getElementById("chat").style.visibility="hidden"
    // }
    // else if(this.chatService.getData()==false){
    //   document.getElementById("quiz").style.visibility="hidden",
    //   document.getElementById("chat").style.visibility="visible"

    // }

    if(this.authService.loggedIn()){
      this.router.navigate(['preview'])
    }
    else{
      this.router.navigate(['login']);
    }
    
    this.firstFormGroup = this._formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      full_name: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required]
     


    });
   
    // this.alldataservice.store_data_first_time();
    console.log("before",this.alldata)
    this.retreiveingdata();
    console.log("fter",this.alldata)
    console.log("in ans",this.alldataservice.getData2())
    this.answer=this.alldataservice.getData2()
    console.log("this.answer",this.answer)
  }
  go(i){
    console.log("i is ",i,this.answer);
    return i==this.answer;
  }
  retreiveingdata() {

    this.alldata = this.alldataservice.fetch_Data_from_data();
    for (let i = 0; i < this.alldata.page.length; i++) {

      this.ngdata[i] = this.alldata.page[i].Type;
   
      this.titles[i]=this.alldata.page[i].question_name;
      this.sbmtbtn[i]=this.alldata.page[i].submit_name;
      this.isAnswer[i]=this.alldata.page[i].isAnswer;
      this.isAnswer1[i]=this.alldata.page[i].isAnswer1
      this.image_logo[i]=this.alldata.page[i].url
      console.log("titles",this.titles[i])
      console.log("titles",this.sbmtbtn[i])
      console.log("is",this.isAnswer[i]);
      console.log("answwrrt here",this.isAnswer1[i]);
    
      
    }

    
      
    //  for (let j = 0; j < this.alldata.page[0].field.length; j++) {
     
    //   this.welcomepagefields[j]=this.alldata.page[0].field[j].type;
    //   this.welcomeplaceholder[j]=this.alldata.page[0].field[j].placeholder;
    //  }
     
    
    
  }
  multi_opanion(data)
  {
    let s=[];
    for (let k = 0; k < this.alldata.page[data].Options.length; k++) {
          
      s[k]=this.alldata.page[data].Options[k].option_name;
       }
       return s;
  }

}
