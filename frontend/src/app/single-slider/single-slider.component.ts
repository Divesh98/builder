import { Component, OnInit,Input } from '@angular/core';
import { AlldataService } from '../service/alldata.service';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-single-slider',
  templateUrl: './single-slider.component.html',
  styleUrls: ['./single-slider.component.css']
})
export class SingleSliderComponent implements OnInit {



  constructor(private alldataservice:AlldataService,private chatService:ChatService) { }

  ngOnInit() {
  this.alldata = this.alldataservice.fetch_Data_from_data();  
  this.button_click = this.alldata.page[this.i].submit_name;
 
  this.fetchallmulti();

  // chat
  // this.alldata=this.chatService.fetch_Data_from_data();
  // this.button_click = this.alldata.chat[this.i].submit_name;
  // this.fetchallmulti1();
   }
 
  
  @Input() i: number;
  title;
  allsingleoption=[];
  alldata;

 
removeoption(data)
{
  this.alldata.page[this.i].Options.splice(data, 1);
  this.alldataservice.store_data_localhost(this.alldata);
  this.allsingleoption.splice(-1,1);
  this.alldata.page[this.i].isAnswer1=[]
  this.fetchallmulti();
  
}

  fetchallmulti()
  {
    for(let j=0;j<this.alldata.page[this.i].Options.length;j++)
    {
      this.allsingleoption[j]=this.alldata.page[this.i].Options[j].option_name;
    }


  }
  // chat
  fetchallmulti1(){
    for(let j=0;j<this.alldata.chat[this.i].Options.length;j++)
    {
      this.allsingleoption[j]=this.alldata.chat[this.i].Options[j].option_name;
    }

  }

  addoption()
  {
    let newdata={option_name:"option "}
    this.alldata.page[this.i].Options.push(newdata);
    this.alldataservice.store_data_localhost(this.alldata);
  this.fetchallmulti();
  }
  // chat
  addoption1()
  {
    let newdata={option_name:"option "}
    this.alldata.chat[this.i].Options.push(newdata);
    this.chatService.store_data_localhost(this.alldata);
  this.fetchallmulti1();
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
  
        },
        'froalaEditor.initialized': (e, editor) =>
         {
          editor.html.set(this.alldata.page[this.i].Options[index].option_name);
        }
  
  
      }
    }
  } 
  // chat
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
          this.fetchallmulti()
       
  
        },
        'froalaEditor.initialized': (e, editor) =>
         {
          editor.html.set(this.alldata.chat[this.i].Options[index].option_name);
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
        localStorage.setItem("template", JSON.stringify(this.alldata));

      },
      'froalaEditor.initialized': (e, editor) => {
        editor.html.set(this.alldata.page[this.i].question_name);
      }


    }
  }
  // chat
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
  // chat
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
  onSelected(event,data,index){
    console.log("field",data)
    console.log("index",index);
    this.alldataservice.setData2(index)
    
      this.alldata.page[this.i].isAnswer1=data
    console.log("this.alldata.page[this.i].isAnswer1",this.alldata.page[this.i].isAnswer1)
    this.fetchallmulti()
    this.alldataservice.store_data_localhost(this.alldata);
  }






}
