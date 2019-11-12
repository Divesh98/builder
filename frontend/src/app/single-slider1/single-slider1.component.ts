import { Component, OnInit,Input } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-single-slider1',
  templateUrl: './single-slider1.component.html',
  styleUrls: ['./single-slider1.component.css']
})
export class SingleSlider1Component implements OnInit {

  constructor(private chatService:ChatService) { }

  ngOnInit() {
    this.alldata=this.chatService.fetch_Data_from_data();
  this.button_click = this.alldata.chat[this.i].submit_name;
  this.fetchallmulti1();
  }
   
  @Input() i: number;
  title;
  allsingleoption=[];
  alldata;

removeoption1(data)
{
  this.alldata.chat[this.i].Options.splice(data, 1);
  this.chatService.store_data_localhost(this.alldata);
  this.allsingleoption.splice(-1,1);
  this.alldata.chat[this.i].isAnswer1=[]
  this.fetchallmulti1();
  
}
fetchallmulti1(){
  for(let j=0;j<this.alldata.chat[this.i].Options.length;j++)
  {
    this.allsingleoption[j]=this.alldata.chat[this.i].Options[j].option_name;
  }

}
addoption1()
  {
    let newdata={option_name:"option "}
    this.alldata.chat[this.i].Options.push(newdata);
    this.chatService.store_data_localhost(this.alldata);
  this.fetchallmulti1();
  }
  button_click;
  checkboxbuton1(index){
    return {
      editInPopup: true,
      charCounterCount: false,
      multiLine: false,
  
      events: 
      {
  
        'froalaEditor.contentChanged': (e, editor) => 
        {
          this.button_click = e.target.innerHTML;
          this.alldata.chat[this.i].Options[index].option_name= e.target.innerHTML;
          localStorage.setItem("template1", JSON.stringify(this.alldata));
  
        },
        'froalaEditor.initialized': (e, editor) =>
         {
          editor.html.set(this.alldata.chat[this.i].Options[index].option_name);
        }
  
  
      }
    }
  } 
  Question1 = {
    editInPopup: true,
    charCounterCount: false,
    multiLine: false,

    events: {

      'froalaEditor.contentChanged': (e, editor) => {
        this.title = e.target.innerHTML;
        this.alldata.chat[this.i].question_name = e.target.innerHTML;
        localStorage.setItem("template1", JSON.stringify(this.alldata));

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
        this.alldata.chat[this.i].submit_name = e.target.innerHTML;
        localStorage.setItem("template1", JSON.stringify(this.alldata));

      },
      'froalaEditor.initialized': (e, editor) =>
       {
        editor.html.set(this.alldata.chat[this.i].submit_name);
      }


    }
  }
  onSelected1(event,data,index){
  
    console.log("field",data)
      this.alldata.chat[this.i].isAnswer1=data
      this.chatService.setData2(index)

    console.log("this.alldata.page[this.i].isAnswer1",this.alldata.chat[this.i].isAnswer1)
    this.chatService.store_data_localhost(this.alldata);
    this.fetchallmulti1()
  }

}
