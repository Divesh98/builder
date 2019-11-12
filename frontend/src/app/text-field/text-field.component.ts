import { Component, OnInit,Input } from '@angular/core';
import { AlldataService } from '../service/alldata.service';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {
  // alldata:any;
  // title;
  // title_sub;
  // button_click;
  alldata;
  data;
  logo_img;
  title;
  title_sub;
  button_click;
  isAnswer:String;
alldata1=[]

  constructor(private alldataservice:AlldataService,private chatService:ChatService) {

   }

  ngOnInit() {

    console.log("i is",this.i);
   
    
    this.alldata = this.alldataservice.fetch_Data_from_data();
    console.log("textt data",this.alldata)
    this.title = this.alldata.page[this.i].question_name;
    console.log("title",this.title)

    this.button_click = this.alldata.page[this.i].button_click;
    
    //chat

    // this.alldata=this.chatService.fetch_Data_from_data();
    // console.log("textt data",this.alldata)
    // this.title=this.alldata.chat[this.i].question_name
    // console.log("title",this.title);
    // this.button_click=this.alldata.chat[this.i].button_click





  }
  

  onClick(){
    const user={

      isAnswer:this.isAnswer

    }
    this.alldata.page[this.i].isAnswer=this.isAnswer
   
   
    this.alldataservice.fetch_Data_from_data()
    console.log("this.all",this.alldata)
    this.alldataservice.store_data_localhost(this.alldata)
    console.log("this.all",this.alldata)

    
  
    console.log("user",this.isAnswer)
  }
  // onClick1(){
  //   const user={
  //     isAnswer:this.isAnswer
  //   }
  //   this.alldata.chat[this.i].isAnswer=this.isAnswer
  //   this.chatService.store_data_localhost(this.alldata)

  // }



  options = {
    editInPopup: true,
    charCounterCount: true,
    multiLine: true,

    events: {

      'froalaEditor.contentChanged': (e, editor) => {
        this.title = e.target.innerHTML;
        
        this.alldata.page[this.i].question_name = e.target.innerHTML;
     
        localStorage.setItem("template", JSON.stringify(this.alldata));
        // this.alldataservice.store_data_localhost(this.alldata.page)
     
        this.alldataservice.fetch_Data_from_data()
        console.log("edef",this.alldata)
 
      

      },
      'froalaEditor.initialized': (e, editor) => {
        editor.html.set(this.alldata.page[this.i].question_name);
      }


    }
  }
  // chat
  // options1 = {
  //   editInPopup: true,
  //   charCounterCount: true,
  //   multiLine: true,

  //   events: {

  //     'froalaEditor.contentChanged': (e, editor) => {
  //       this.title = e.target.innerHTML;
        
  //       this.alldata.chat[this.i].question_name = e.target.innerHTML;
     
  //       localStorage.setItem("template1", JSON.stringify(this.alldata));
        
     
  //       this.chatService.fetch_Data_from_data()
 
      

  //     },
  //     'froalaEditor.initialized': (e, editor) => {
  //       editor.html.set(this.alldata.chat[this.i].question_name);
  //     }


  //   }
  // }






  

  
   
  mybuttonx = 
  {
    editInPopup: true,
    charCounterCount: false,
    multiLine: false,

    events: 
    {

      'froalaEditor.contentChanged': (e, editor) => 
      {
        this.button_click = e.target.innerHTML;
        this.alldata.page[this.i].submit_name = this.button_click;
        localStorage.setItem("template", JSON.stringify(this.alldata));
        this.alldataservice.fetch_Data_from_data()

      },
      'froalaEditor.initialized': (e, editor) =>
       {
        editor.html.set(this.alldata.page[this.i].submit_name);
      }



    }
  }
  // chat
  // mybuttonx1 = 
  // {
  //   editInPopup: true,
  //   charCounterCount: false,
  //   multiLine: false,

  //   events: 
  //   {

  //     'froalaEditor.contentChanged': (e, editor) => 
  //     {
  //       this.button_click = e.target.innerHTML;
  //       this.alldata.chat[this.i].submit_name = this.button_click;
  //       localStorage.setItem("template1", JSON.stringify(this.alldata));

  //     },
  //     'froalaEditor.initialized': (e, editor) =>
  //      {
  //       editor.html.set(this.alldata.chat[this.i].submit_name);
  //     }


  //   }
  // }


  @Input() i: number;


  save_data_in_localstoreage_button(data) {
    this.alldata.page[this.i].button_click = data.target.innerHTML;
    localStorage.setItem("template", JSON.stringify(this.alldata));
  }

}
