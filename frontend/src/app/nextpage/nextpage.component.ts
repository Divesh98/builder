import { Component, OnInit } from '@angular/core';
import { AlldataService } from '../service/alldata.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ChatService } from '../service/chat.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit {
  
  alldata:any;

  dataforremove=[];
  dataforad=[];
  type;
  ngdata=[];
  newdata;


  constructor(private alldataservice:AlldataService,private router:Router,private authService:AuthService,private chatService:ChatService,private ngxService: NgxUiLoaderService) { }

  ngOnInit() {

    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 2000);
    
    if(this.authService.loggedIn()){
      this.router.navigate(['/next']);
    }
    else{
      this.router.navigate(['login']);
    }

    //fr quiz
    this.alldataservice.store_data_first_time();

    this.retreiveingdata();
    console.log("in ngonit",this.alldata);
    
    //fr chat
    // this.chatService.store_data_first_time();
    // this.retreiveingdata1();
  }
  
  live(data)
  {
    this.router.navigate(['live']);
    localStorage.getItem("template");
    alert("your page is live now");


 console.log("lenth",this.alldata.page.length) 
 let Questions =this.alldata.page.length;
 let question=this.alldata.page
 for(let i=0;i<Questions;i++){
   console.log("questions",question);
   this.alldataservice.addQuestions(question[i]);
 }    
  }
  editcomponent(ix,data)
  {
    this.alldata = this.alldataservice.fetch_Data_from_data();
    this.alldata.page[ix].Type=data;
   console.log("this.alldata.page[ix].type",this.alldata.page[ix].Type);  
     this.alldataservice.store_data_localhost(this.alldata);
    this.retreiveingdata();
 
  }
  //fr chat
  // editcomponent1(ix,data){
  //   this.alldata=this.chatService.fetch_Data_from_data();
  //   this.alldata.chat[ix].Type=data;
  //   this.chatService.store_data_localhost(this.alldata);
  //   this.retreiveingdata1();




  // }
  addcomponent(ix,data)
  {
    if(data==="multi_select_field"){
      this.newdata={Type:data,
        question_name: "Write Quetion Here",
        submit_name:"Submit",
        isAnswer1:[],
       Options:[{
         option_name:"Option 1",
       },{
         option_name:"Option 2"
       }
      ]
       }

    }
    else if(data==="single_slider"){
      this.newdata={Type:data,
        question_name: "Write Question Here",
        submit_name:"Submit",
        isAnswer1:[],
     
       Options:[{
         option_name:"Option 1",
       },{
         option_name:"Option 2"
       }
      ]
       }

    }
    else if(data ==="text_input_field"){
      this.newdata={Type:data,
        question_name: "Write Question Here",
        submit_name:"Submit"
      }

    }
    else if(data==="file"){
      this.newdata={
        Type:data,
        question_name:"Write Question Here",
        url:""
      }
    }
    
  
 
    this.alldata.page.splice(ix+1,0,this.newdata);
  
    this.alldataservice.store_data_localhost(this.alldata);
    this.retreiveingdata();

  }
  
  

  retreiveingdata()
  {
    
    this.alldata = this.alldataservice.fetch_Data_from_data();
    console.log("this.all data",this.alldata)
    
    
     for (let i = 0; i <this.alldata.page.length;i++) {
this.ngdata[i]=this.alldata.page[i].Type;

// console.log("this.ngdata[i]",this.ngdata[i])
// console.log("in retrive",this.alldata)
   
  }
 
  }

  // retreiveingdata1(){
  //   this.alldata=this.chatService.fetch_Data_from_data();
  //   for(let i=0;i<this.alldata.chat.length;i++){
  //     this.ngdata[i]=this.alldata.chat[i].Type;
  //   }
  // }
  save(data)
  {
  alert("ok");
  }

  removecomponent(data)
  {
   
   this.dataforremove=this.alldata.page;
   console.log("befor",this.dataforremove)
   this.dataforremove.splice(data, 1);
   console.log("this.dataforremove",   this.dataforremove);
 this.ngdata.splice(-1,1);
 console.log("this.gdata",this.ngdata);
   this.alldata.page=this.dataforremove;
   console.log("this.alldataa",this.alldata.page);
 
   this.alldataservice.store_data_localhost(this.alldata);
   this.retreiveingdata();
  }



  

}
