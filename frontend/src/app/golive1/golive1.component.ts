import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ChatService } from '../service/chat.service';


@Component({
  selector: 'app-golive1',
  templateUrl: './golive1.component.html',
  styleUrls: ['./golive1.component.css']
})
export class Golive1Component implements OnInit {

  isLinear = false;
  options: {} = {}
  ngdata=[];
  logoimg=[];
  titles=[];
  titlessub=[];
  sbmtbtn=[];
  welcomepagefields=[];
  welcomeplaceholder=[];
  isAnswer=[];
  first_name=[];
  last_name=[];
  location=[];
  answer;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  starrating;
 
 dddddd=[[],[]];
  
  alldata;


  constructor(private router:Router,private authService:AuthService,private chatService:ChatService) { }

  ngOnInit() {
    this.starrating=this.chatService.getData3()
    console.log("in ng onit",this.starrating)
    this.answer=this.chatService.getData2()
    if(this.authService.loggedIn()){
      this.router.navigate(['preview1'])
    }
    else{
      this.router.navigate(['login']);
    }

    console.log("before",this.alldata)
    this.retreiveingdata1();
    console.log("fter",this.alldata)
    
  }
  go(i){
    console.log("i is ",i,this.answer);
    return i==this.answer;
  }
  retreiveingdata1() {

    this.alldata = this.chatService.fetch_Data_from_data();
    for (let i = 0; i < this.alldata.chat.length; i++) {

      this.ngdata[i] = this.alldata.chat[i].Type;
   
      this.titles[i]=this.alldata.chat[i].question_name;
      this.sbmtbtn[i]=this.alldata.chat[i].submit_name;
      this.isAnswer[i]=this.alldata.chat[i].isAnswer;
      this.first_name[i]=this.alldata.chat[0].field.first_name
      this.last_name[i]=this.alldata.chat[0].field.last_name
      this.location[i]=this.alldata.chat[0].field.location
      console.log("titles",this.titles[i])
      console.log("titles",this.sbmtbtn[i])
      console.log("first",this.first_name[i])  
    }

    
      
    //  for (let j = 0; j < this.alldata.page[0].field.length; j++) {
     
    //   this.welcomepagefields[j]=this.alldata.page[0].field[j].type;
    //   this.welcomeplaceholder[j]=this.alldata.page[0].field[j].placeholder;
    //  }
     
    
    
  }
  multi_opanion(data)
  {
    let s=[];
    for (let k = 0; k < this.alldata.chat[data].Options.length; k++) {
          
      s[k]=this.alldata.chat[data].Options[k].option_name;
       }
       return s;
  }
  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }

}
