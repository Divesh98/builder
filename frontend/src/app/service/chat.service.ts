import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  serviceData:boolean
  serviceData1;
  serviceData2;
  serviceData3;
  serviceData4=[]
  constructor(private http:HttpClient) { }
  test1={
    chat:[
      {
        Type:"first_page",
        field:
          {
            "first_name":"",
            "last_name":"",
            "location":"",
          },
        question_name:"Chat bot heading goes here?",
        submit_name:"submit"
      },
      {
        Type:"text_input_field",
        question_name:"Chat bot heading goes here?",
        submit_name:"submit",
        isAnswer:""

      },
      {
        Type:"multi_select_field",
        question_name:"Write Question Here?",
        submit_name:"submit",
        isAnswer1:[],
        Options:[
          {
          "option_name":"Option 1",
        },
        {
          "option_name":"Option 2"

        }
      ]
      },
      {
        Type:"single_slider",
        question_name:"Write Question Here?",
        submit_name:"submit",
        isAnswer1:[],
        Options:[
          {
          "option_name":"Option 1",
        },
        {
          "option_name":"Option 2"

        }
      ]
      },
      {
        Type:"rating_field",
        question_name: "Rating is here ?",
        ratingAnswer:"",
        submit_name:"Submit",
      }
    ],
    template1:{}
  };
  store_data_first_time() {
    if (localStorage.getItem("template1") === null) {
      localStorage.setItem("template1", JSON.stringify(this.test1));
    }
    
  }
  fetch_Data_from_data() {
    return JSON.parse(localStorage.getItem("template1"));
  }

  store_data_localhost(data) {
      localStorage.setItem("template1", JSON.stringify(data));
  
    console.log("data",data);
  }

  addChat(question){
    let headers =new HttpHeaders();
    headers.append("Content-Type","application-json");
    return this.http.post("http://localhost:3000/api/chatQuestion",question,{headers:headers}).toPromise();
  }
  getChat(){
    let headers=new HttpHeaders();
  headers.append('Content-Type',"application-json");
  return this.http.get("http://localhost:3000/api/getChat",{headers:headers}).toPromise();
  }

  setData(value){
    this.serviceData=value;
    console.log("this.service",this.serviceData)
  }
  getData(){
    return this.serviceData;
  }
  setData1(value){
    this.serviceData1=value
    console.log("value",this.serviceData1)
  }
  getData1(){
    return this.serviceData1
  }
  setData2(value){

    this.serviceData2=value
    // console.log("value",value);
  }
  getData2(){
    return this.serviceData2
  }
  setData3(value){
    this.serviceData3=value
    console.log("3rd value",this.serviceData3)
 }
 getData3(){
   return this.serviceData3
 }

  

}
