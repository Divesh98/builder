import { Component, OnInit } from '@angular/core';
import { AlldataService } from '../service/alldata.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private alldataservice: AlldataService,private router:Router,private authService:AuthService,private toast:ToastrService,private ngxService: NgxUiLoaderService ) { }
  options: {} = {}
  ngdata=[];
  logoimg=[];
  titles=[];
  titlessub=[];
  sbmtbtn=[];
  welcomepagefields=[];
  welcomeplaceholder=[];
  questions=[];
  isAnswer=[];
  isAnswer1=[];
  answer;
  image_logo=[]
 
 dddddd=[[],[]];
 href=""
  link="localhost:4200";
  liveValue;
  
  alldata;
  user;
    async ngOnInit() {
      this.href=this.router.url;
    console.log("this.href",this.href);
    console.log("user",this.link)
    let user1=`localhost:4200${this.href}`
    console.log("usr1",user1)
    this.alldataservice.setData1(user1);
    this.liveValue=this.alldataservice.getData1()
    this.answer=this.alldataservice.getData2()

      this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 2000);

      // if(this.authService.loggedIn()){
      //   this.router.navigate(['live'])
      // }
      // else{
      //   this.router.navigate(['login']);
      // }
   
    this.firstFormGroup = this._formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      full_name: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required],


  
     


    });
  

   
    // this.alldataservice.store_data_first_time_in_live(this.alldata);
    // console.log("this.all data before ",this.alldata);
    this.retreiveingdata();
    // console.log("this.alldata after",this.alldata);
    let response= await this.alldataservice.getQuestion();
    console.log("response",response)
    this.questions=response['res']
    console.log("questions",this.questions)

  }
  go(i){
    console.log("i is ",i,this.answer);
    return i==this.answer;
  }
  retreiveingdata() {

    // this.alldata = this.alldataservice.fetch_Data_from_data_in_live();
    // for (let i = 0; i < this.alldata.page.length; i++) {

    //   this.ngdata[i] = this.alldata.page[i].Type;
   
    //   this.titles[i]=this.alldata.page[i].question_name;


      // this.titlessub[i]=this.alldata.page[i].title_sub;
      // this.sbmtbtn[i]=this.alldata.page[i].button_click;
  // }
       this.user =JSON.parse(localStorage.getItem('template'));
      console.log("user",this.user.page.length);

      this.alldata=this.user.page.length
      console.log("this.alldata",this.alldata);
      for(let i=0;i<this.alldata;i++){
        this.ngdata[i]=this.user.page[i].Type;
        this.titles[i]=this.user.page[i].question_name;
        this.isAnswer[i]=this.user.page[i].isAnswer;
        this.sbmtbtn[i]=this.user.page[i].submit_name;
        this.isAnswer1[i]=this.user.page[i].isAnswer1;
        this.image_logo[i]=this.user.page[i].url
    }
    console.log("is",this.isAnswer)
    console.log("is",this.ngdata)
    console.log("isANSWER IN LIVE",this.isAnswer1)

    
      
    //  for (let j = 0; j < this.alldata.page[0].field.length; j++) {
     
    //   this.welcomepagefields[j]=this.alldata.page[0].field[j].type;
    //   this.welcomeplaceholder[j]=this.alldata.page[0].field[j].placeholder;
    //  }
     
    
    
  }
  multi_opanion(data)
  {
    let s=[];
    for (let k = 0; k <this.user.page[data].Options.length; k++) {
          
      s[k]=this.user.page[data].Options[k].option_name;
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
    data.setSelectionRange(0,0)

    alert("Copied the text");

  }
  
}
