import { Component, OnInit,Input } from '@angular/core';
import { AlldataService } from '../service/alldata.service';
import { ThrowStmt } from '@angular/compiler';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-multi-select-field',
  templateUrl: './multi-select-field.component.html',
  styleUrls: ['./multi-select-field.component.css']
})
export class MultiSelectFieldComponent implements OnInit {
 
  selected=[]


  constructor(private alldataservice:AlldataService,private chatService:ChatService) { }

  ngOnInit() {
    this.alldata = this.alldataservice.fetch_Data_from_data(); 
    console.log("next data",this.alldata)
    this.fetchallmulti();

// chat

// this.alldata=this.chatService.fetch_Data_from_data();
// console.log("next data",this.alldata)
// this.fetchallmulti1()
  }



  
  @Input() i: number;
  title;
  allmultioption=[];
  alldata;

removeoption(data)
{
  this.alldata.page[this.i].Options.splice(data, 1);
  this.alldataservice.store_data_localhost(this.alldata);
  this.allmultioption.splice(-1,1);
  this.selected.pop()
  this.fetchallmulti();
  
}
  fetchallmulti()
  {
    for(let j=0;j<this.alldata.page[this.i].Options.length;j++)
    {
      this.allmultioption[j]=this.alldata.page[this.i].Options[j].option_name;
      console.log(" this.allmultioption[j]",this.alldata.page[this.i].Options[j].option_name)
    }


  }
  

  

  addoption()
  {
    
    let newdata={option_name:"option "}
    this.alldata.page[this.i].Options.push(newdata);
    this.alldataservice.store_data_localhost(this.alldata);
  this.fetchallmulti();
  }
  
  button_click;
  checkboxbuton(index){
    return {
      editInPopup: true,
      charCounterCount: false,
      multiLine: false,
  
      events: 
      {
  
        'froalaEditor.contentChanged': (e, editor) => 
        {
          this.button_click = e.target.innerHTML;
          this.alldata.page[this.i].Options[index].option_name= e.target.innerHTML;
          localStorage.setItem("template", JSON.stringify(this.alldata));
          this.alldataservice.fetch_Data_from_data();
  
        },
        'froalaEditor.initialized': (e, editor) =>
         {
          editor.html.set(this.alldata.page[this.i].Options[index].option_name);
        }
  
  
      }
    }
  } 
  

  Question = {
    editInPopup: true,
    charCounterCount: false,
    multiLine: false,

    events: {

      'froalaEditor.contentChanged': (e, editor) => {
        this.title = e.target.innerHTML;
        this.alldata.page[this.i].question_name = e.target.innerHTML;
        // console.log(" e.target.innerHTML", e.target.innerHTML)
        localStorage.setItem("template", JSON.stringify(this.alldata));
        this.alldataservice.fetch_Data_from_data();

      },
      'froalaEditor.initialized': (e, editor) => {
        editor.html.set(this.alldata.page[this.i].question_name);
      }


    }
  }

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
        this.alldata.page[this.i].submit_name = e.target.innerHTML;
        localStorage.setItem("template", JSON.stringify(this.alldata));

      },
      'froalaEditor.initialized': (e, editor) =>
       {
        editor.html.set(this.alldata.page[this.i].submit_name);
      }


    }
  }


  onSelected(event,data){
    console.log("data",data);
    if(event.checked ===true){
      this.selected.push(data)
      console.log("event",event.checked)
      console.log("selected=[]",this.selected);
      this.alldata.page[this.i].isAnswer1=this.selected
      console.log("data",this.alldata.page[this.i].isAnswer1)
      this.alldataservice.store_data_localhost(this.alldata)
      this.fetchallmulti()
    }
    if(event.checked===false){
      this.selected.pop()
      this.alldata.page[this.i].isAnswer1=this.selected
      console.log("data",this.alldata.page[this.i].isAnswer1)
      this.alldataservice.store_data_localhost(this.alldata)
      this.fetchallmulti()
    }
  
  }


}
