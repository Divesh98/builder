import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../service/chat.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-live1',
  templateUrl: './live1.component.html',
  styleUrls: ['./live1.component.css']
})
export class Live1Component implements OnInit {
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
  user;
  questions=[]
  liveValue;
  message;
  answer;
  starrating;
  stars: number[] = [1, 2, 3, 4, 5];
 
 dddddd=[[],[]];
  
  alldata;
  href=""
  link="localhost:4200";
  
  constructor(private toast:ToastrService,private chatService:ChatService,private router:Router,private authService:AuthService,private ngxService: NgxUiLoaderService) {
    
   }

   async ngOnInit() {

    this.starrating=this.chatService.getData3()
    this.answer=this.chatService.getData2()
    this.href=this.router.url;
    console.log("this.href",this.href);
    console.log("user",this.link)
    let user1=`localhost:4200${this.href}`
    console.log("usr1",user1)
    this.chatService.setData1(user1);
      

    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 2000);
    this.liveValue=this.chatService.getData1()

      // if(this.authService.loggedIn()){
      //   this.router.navigate(['live1'])
      // }
      // else{
      //   this.router.navigate(['login']);
      // }
      this.retreiveingdata2();
      let response = await this.chatService.getChat();
      console.log("response back",response)
      this.questions=response['res'];
      console.log("questions in live",this.questions);
      for(let i=0;i<this.questions.length;i++){
        console.log("questions name",this.questions[i].Type)
        this.titles[i]=this.questions[i].question_name
        console.log("title is heere",this.titles[i])
        this.sbmtbtn[i]=this.questions[i].submit_name
        this.isAnswer[i]=this.questions[i].isAnswer
        this.first_name[i]=this.questions[0].field.first_name
        this.last_name[i]=this.questions[0].field.last_name
        this.location[i]=this.questions[0].field.location
      }

  }
  go(i){
    console.log("i is ",i,this.answer);
    return i==this.answer;
  }
  //  retreiveingdata1() {
  //    this.user=JSON.parse(localStorage.getItem("template1"));
  //    console.log("user",this.user.chat.length);
  //    this.alldata=this.user.chat.length
  //    console.log("this.alldata",this.alldata);

  //   for (let i = 0; i < this.alldata; i++) {

  //     this.ngdata[i] = this.user.chat[i].Type;
   
  //     this.titles[i]=this.user.chat[i].question_name;
  //     this.sbmtbtn[i]=this.user.chat[i].submit_name;
  //     this.isAnswer[i]=this.user.chat[i].isAnswer;
  //     this.first_name[i]=this.user.chat[0].field.first_name
  //     this.last_name[i]=this.user.chat[0].field.last_name
  //     this.location[i]=this.user.chat[0].field.location
  //     console.log("titles",this.titles[i])
  //     console.log("titles",this.sbmtbtn[i])
  //     console.log("first",this.first_name[i])
    
  //   }
    
    
  // }
 async retreiveingdata2() {
    let response = await this.chatService.getChat();
    console.log("response back",response)
    this.questions=response['res'];
    console.log("questions in live",this.questions);
    for(let i=0;i<this.questions.length;i++){
      this.ngdata[i] = this.questions[i].Type;
      console.log("questions name",this.questions[i].Type)
      this.titles[i]=this.questions[i].question_name
      console.log("title is heere",this.titles[i])
      this.sbmtbtn[i]=this.questions[i].submit_name
      this.isAnswer[i]=this.questions[i].isAnswer
      this.first_name[i]=this.questions[0].field.first_name
      this.last_name[i]=this.questions[0].field.last_name
      this.location[i]=this.questions[0].field.location
    }
   
   
 }
  multi_opanion(data)
  {
    let s=[];
    for (let k = 0; k < this.questions[data].Options.length; k++) {
          
      s[k]=this.questions[data].Options[k].option_name;
       }
       return s;
  }
  onlogout(){
    this.authService.logOut();
    this.toast.success('you are logged out');
   
  }
  copyMessage(data){
    
    data.select(),
    document.execCommand("copy");
    data.setSelectionRange(0,0);
    this.toast.success('Your text is copied');

  }

}

