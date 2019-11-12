import { Component, OnInit,Input } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-multi-select-field1',
  templateUrl: './multi-select-field1.component.html',
  styleUrls: ['./multi-select-field1.component.css']
})
export class MultiSelectField1Component implements OnInit {
  selected=[]

  constructor(private chatService:ChatService) { }

  ngOnInit() {
    
this.alldata=this.chatService.fetch_Data_from_data();
console.log("next data",this.alldata)
this.fetchallmulti1()
  }
  @Input() i: number;
  title;
  allmultioption=[];
  alldata;

  removeoption1(data)
{
  this.alldata.chat[this.i].Options.splice(data, 1);
  this.chatService.store_data_localhost(this.alldata);
  this.allmultioption.splice(-1,1);
  this.selected.pop()
  this.fetchallmulti1();
  
}
fetchallmulti1(){
  for(let j=0;j<this.alldata.chat[this.i].Options.length;j++)
  {
    this.allmultioption[j]=this.alldata.chat[this.i].Options[j].option_name;
    console.log(" this.allmultioption[j]",this.alldata.chat[this.i].Options[j].option_name)
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
        // console.log(" e.target.innerHTML", e.target.innerHTML)
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
onSelected1(event,data){
    console.log("data",data);
    if(event.checked ===true){
      this.selected.push(data)
      console.log("event",event.checked)
      console.log("selected=[]",this.selected);
      this.alldata.page[this.i].isAnswer1=this.selected
      console.log("data",this.alldata.page[this.i].isAnswer1)
      this.chatService.store_data_localhost(this.alldata)
      this.fetchallmulti1()
    }
    if(event.checked===false){
      this.selected.pop()
      this.alldata.page[this.i].isAnswer1=this.selected
      console.log("data",this.alldata.page[this.i].isAnswer1)
      this.chatService.store_data_localhost(this.alldata)
      this.fetchallmulti1()
    }
  
  }

}
