import { Component, OnInit,Input } from '@angular/core';
import { AlldataService } from '../service/alldata.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  myForm:FormGroup
  alldata;
  data;
  logo_img;
  title; newdata;
  title_sub;

  button_click;
 
  constructor(private alldataservice:AlldataService,private authService:AuthService,private router:Router,private fb:FormBuilder,private chatService:ChatService) { }

  ngOnInit() {
    this.myForm=new FormGroup({
      "first_name":new FormControl(null,[Validators.required]),
      "last_name":new FormControl(null,[Validators.required]),
      "location":new FormControl(null,[Validators.required])
      
    })
   

   
    this.alldata = this.chatService.fetch_Data_from_data();
  
    this.title = this.alldata.chat[this.i].question_name;
    this.button_click = this.alldata.chat[this.i].submit_name;

    this.fetchalldata();
  }

  // options={
  //   toolbarInline: true,
  //   charCounterCount: false,
  //   multiLine: false,
  //   events:{
  //     "froalaEditor.contentChanged":(e,editor)=>{
  //       this.title=e.target.innerHtml;
  //       this.alldata.page[this.i].title=e.target.innerHtml;
  //       localStorage.setItem("template",JSON.stringify(this.alldata));
  //     },
  //     "froalaEditor.initialized":(e,editor)=>{
  //       editor.html.set(this.alldata.page[this.i].title);
        
  //     }
  //   }

  // }
  options = {
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
  // options2 =
  //   {
  //     toolbarInline: true,
  //     charCounterCount: false,
  //     multiLine: false,

  //     events:
  //     {

  //       'froalaEditor.contentChanged': (e, editor) => {
  //         this.title = e.target.innerHTML;
  //         this.alldata.page[this.i].title_sub = e.target.innerHTML;
  //         localStorage.setItem("template", JSON.stringify(this.alldata));

  //       },
  //       'froalaEditor.initialized': (e, editor) => {
  //         editor.html.set(this.alldata.page[this.i].title_sub);
  //       }
  //     }
  //   }
  options2 =
    {
      toolbarInline: true,
      charCounterCount: false,
      multiLine: false,

      events:
      {

        'froalaEditor.contentChanged': (e, editor) => {
          this.title = e.target.innerHTML;
          this.alldata.page[this.i].title_sub = e.target.innerHTML;
          localStorage.setItem("template", JSON.stringify(this.alldata));

        },
        'froalaEditor.initialized': (e, editor) => {
          editor.html.set(this.alldata.page[this.i].title_sub);
        }


      }
    }
    // mybutton =
    // {
    //   editInPopup: true,
    //   charCounterCount: false,
    //   multiLine: false,

    //   events:
    //   {

    //     'froalaEditor.contentChanged': (e, editor) => {
    //       this.button_click = e.target.innerHTML;
    //       this.alldata.page[this.i].button_click = e.target.innerHTML;
    //       localStorage.setItem("template", JSON.stringify(this.alldata));
    //     },
    //     'froalaEditor.initialized': (e, editor) => {

    //       e.target.innerHTML = this.alldata.page[this.i].button_click;
    //     }


    //   }
    // }
    mybutton =
    {
      editInPopup: true,
      charCounterCount: false,
      multiLine: false,

      events:
      {

        'froalaEditor.contentChanged': (e, editor) => {
          this.button_click = e.target.innerHTML;
          this.alldata.chat[this.i].submit_name = e.target.innerHTML;
          localStorage.setItem("template1", JSON.stringify(this.alldata));

        },
        'froalaEditor.initialized': (e, editor) => {

          e.target.innerHTML = this.alldata.chat[this.i].submit_name;
        }


      }
    }
    // inputbox_placeholder(index) {
    //   return this.alldata.page[0].field[index].placeholder;
    // }
    inputbox_placeholder(index) {
      return this.alldata.page[0].field[index].placeholder;
    }
    checkboxbuton(index) {
      return {
        editInPopup: true,
        charCounterCount: false,
        multiLine: false,
  
        events:
        {
  
          'froalaEditor.contentChanged': (e, editor) => {
            this.button_click = e.target.innerHTML;
            this.alldata.page[0].field[index].placeholder = e.target.innerHTML;
            localStorage.setItem("template", JSON.stringify(this.alldata));
  
          },
          'froalaEditor.initialized': (e, editor) => {
            editor.html.set(this.alldata.page[0].field[index].placeholder);
          }
  
  
        }
      }
    }
  
    // removefield(data){
    //   this.alldata=this.alldataservice.fetch_Data_from_data();
    //   this.alldata.page[0].field.splice(data,1);
    //   this.alldataservice.store_data_localhost(this.alldata);
    //   this.newfield.splice(-1,1);
    //   this.fetchalldata();

    // }
    removefield(data) {

      this.alldata = this.chatService.fetch_Data_from_data();
      console.log(" this.alldata", this.alldata)
      this.alldata.chatz.splice(data, 1);
      this.alldataservice.store_data_localhost(this.alldata);
      this.newfield.splice(-1, 1);
      this.fetchalldata();
  
    }
    // fetchalldata(){
    //   for(let i =0;i<this.alldata.page[0].field.length;i++){
    //     this.newfield[i]=this.alldata.page[0].field[i].type;
    //   }
    // }
    
  fetchalldata() {

    for (let i = 0; i < this.alldata.page[0].field.length; i++) {

      this.newfield[i] = this.alldata.page[0].field[i].type;
      console.log("dedeef", this.newfield[i]);

    }
  }
    // editfield(index,data){
    //   this.alldata=this.alldataservice.fetch_Data_from_data();
    //   let inp="Placeholder";
    //   if(data == 'first_name'){
    //     inp = "First Name";

    //   }
    //   else if(data == "last_name"){
    //     inp ="Last Name";
    //   }
    //   else if(data =="email"){
    //     inp ="Email Address";
    //   }
    //   else if(data == "phone_number"){
    //     inp = "Phone Number";
    //   }
    //   this.newdata ={type:data,placeholder:inp}
    //   this.alldata.page[0].field.splice(index,1,this.newdata);
    //   this.alldataservice.store_data_localhost(this.alldata);
    //   this.fetchalldata();
    // }


    editfield(index, data) {
      this.alldata = this.alldataservice.fetch_Data_from_data();
      let inp = "Placeholder ";
      
       if (data == "first_name") {
        inp = "First Name";
      }
      else if (data == "last_name") {
        inp = "Last Name";
      }
      else if (data == "full_name") {
        inp = "Full Name";
      }
      else if (data == "email") {
        inp = "Email Address";
      }
  
      else if (data == "phone_number") {
        inp = "Phone Number";
      }
      
      this.newdata = { type: data, placeholder: inp }
      this.alldata.page[0].field.splice(index, 1, this.newdata);
      this.alldataservice.store_data_localhost(this.alldata);
      this.fetchalldata();
    }
    // addfield(index,data){
    //   this.alldata=this.alldataservice.fetch_Data_from_data();
    //   let inp ="Placeholder";

    //   if(inp =="first_name"){
    //     inp = "First Name";
    //   }
    //   else if(inp =="last_name"){
    //     inp = "Last Name";
    //   }
    //   else if(inp == "email"){
    //     inp = "Email";
    //   }
    //   else if(inp =="phone_number"){
    //     inp ="Phone Number";
    //   }
    //   this.newdata ={type:data,placeholder:inp}
    //   this.alldata.page[0].field.push(this.newdata);
    //   this.alldataservice.store_data_localhost(this.alldata);
    //   this.fetchalldata();

    // }
    addfield(data) {
      this.alldata = this.alldataservice.fetch_Data_from_data();
      let inp = "Placeholder ";
     
       if (data == "first_name") {
        inp = "First Name";
      }
      else if (data == "last_name") {
        inp = "Last Name";
      }
      else if (data == "full_name") {
        inp = "Full Name";
      }
      else if (data == "email") {
        inp = "Email Address";
      }
  
      else if (data == "phone_number") {
        inp = "Phone Number";
      }
      
  
      this.newdata = { type: data, placeholder: inp }
      this.alldata.page[0].field.push(this.newdata);
      console.log(this.alldata.page[0].field);
      this.alldataservice.store_data_localhost(this.alldata);
  
      this.fetchalldata();
  
    }
   
  save_data_in_localstoreage_button(data) {
    this.alldata.page[this.i].button_click = data.target.innerHTML;
    localStorage.setItem("template", JSON.stringify(this.alldata));



  }
  newfield = [];
  newField=[];
    
  @Input() i: number;
  onSubmit(data){
    console.log(" before data",this.alldata)
    console.log("data",data);
    // this.newField.push(data)
    // console.log("new",this.newField)
    // this.alldata.chat[this.i].field=this.newField

    //   console.log("wffwf", this.alldata.chat[this.i].field)
    this.alldata.chat[this.i].field=data
    console.log("now",this.alldata)
    this.chatService.store_data_localhost(this.alldata)
  }
}
