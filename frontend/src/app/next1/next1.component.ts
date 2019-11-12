import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../service/chat.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-next1',
  templateUrl: './next1.component.html',
  styleUrls: ['./next1.component.css']
})
export class Next1Component implements OnInit {
  alldata:any;

  dataforremove=[];
  dataforad=[];
  type;
  ngdata=[];
  newdata;
  
  constructor(private router:Router,private authService:AuthService,private chatService:ChatService,private ngxService: NgxUiLoaderService) { }

  ngOnInit() {  

    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 2000);

    if(this.authService.loggedIn()){
      this.router.navigate(['/next1']);
    }
    else{
      this.router.navigate(['login']);
    }
      this.chatService.store_data_first_time();
    this.retreiveingdata1();
    

  }
  editcomponent1(ix,data){
    this.alldata=this.chatService.fetch_Data_from_data();
    this.alldata.chat[ix].Type=data;
    this.chatService.store_data_localhost(this.alldata);
    this.retreiveingdata1();

  }
  addcomponent1(ix,data){
    if(data==="multi_select_field"){
      this.newdata={Type:data,
        question_name: "Write Question Here?",
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
        question_name: "Write Question Here?",
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
        question_name:"Chat heading here",
        submit_name:"submit",
        isAnswer:""
      }
      

    }
    else if(data==="first_page"){
      this.newdata={Type:data,
        first_name:"divesh",
        last_name:"malhotra",
        location:"jalandhar",
        question_name:"Chat heading here",
        submit_name:"submit"
      }
        
    }
    else if(data==="rating_field"){
      this.newdata={Type:data,
        question_name: "Rating is here ?",
        ratingAnswer:"",
        submit_name:"Submit"
      }
    }
    
    this.alldata.chat.splice(ix+1,0,this.newdata);
  
    this.chatService.store_data_localhost(this.alldata);
    this.retreiveingdata1();
  }
  retreiveingdata1(){
    this.alldata=this.chatService.fetch_Data_from_data();
    for(let i=0;i<this.alldata.chat.length;i++){
      this.ngdata[i]=this.alldata.chat[i].Type;
      console.log("ng[i]",this.ngdata[i])
    }
  }
  
  removecomponent1(data){
    this.dataforremove=this.alldata.chat;
    this.dataforremove.splice(data,1);
    console.log("this.dataforremove",   this.dataforremove);
    this.ngdata.splice(-1,1);
    console.log("this.gdata",this.ngdata);
    this.alldata.chat=this.dataforremove;
    this.chatService.store_data_localhost(this.alldata);
    this.retreiveingdata1();

  }
  question=[];
  live(){
    this.router.navigate(['live1'])
    localStorage.getItem("template1")
    alert("your page is live now");
  
    let Questions=this.alldata.chat.length;
    console.log("Questions",Questions)
    this.question=this.alldata.chat
      console.log("questions",this.question);
      this.chatService.addChat(this.question);
  }
  
   

}
