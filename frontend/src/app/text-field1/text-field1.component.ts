import { Component, OnInit,Input } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-text-field1',
  templateUrl: './text-field1.component.html',
  styleUrls: ['./text-field1.component.css']
})
export class TextField1Component implements OnInit {
  alldata;
  data;
  logo_img;
  title;
  title_sub;
  button_click;
  isAnswer:String;
alldata1=[]

  constructor(private chatService:ChatService) { }

  ngOnInit() {
    
    this.alldata=this.chatService.fetch_Data_from_data();
    console.log("textt data",this.alldata)
    this.title=this.alldata.chat[this.i].question_name
    console.log("title",this.title);
    this.button_click=this.alldata.chat[this.i].button_click
  }
  onClick1(){
    const user={
      isAnswer:this.isAnswer
    }
    this.alldata.chat[this.i].isAnswer=this.isAnswer
    this.chatService.store_data_localhost(this.alldata)

  }
  options1 = {
    editInPopup: true,
    charCounterCount: true,
    multiLine: true,

    events: {

      'froalaEditor.contentChanged': (e, editor) => {
        this.title = e.target.innerHTML;
        
        this.alldata.chat[this.i].question_name = e.target.innerHTML;
     
        localStorage.setItem("template1", JSON.stringify(this.alldata));
        
     
        this.chatService.fetch_Data_from_data()
 
      

      },
      'froalaEditor.initialized': (e, editor) => {
        editor.html.set(this.alldata.chat[this.i].question_name);
      }


    }
  }
  mybuttonx1 = 
  {
    editInPopup: true,
    charCounterCount: false,
    multiLine: false,

    events: 
    {

      'froalaEditor.contentChanged': (e, editor) => 
      {
        this.button_click = e.target.innerHTML;
        this.alldata.chat[this.i].submit_name = this.button_click;
        localStorage.setItem("template1", JSON.stringify(this.alldata));

      },
      'froalaEditor.initialized': (e, editor) =>
       {
        editor.html.set(this.alldata.chat[this.i].submit_name);
      }


    }
  }
  @Input() i: number;

}
