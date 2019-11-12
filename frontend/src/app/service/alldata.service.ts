import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlldataService {
  serviceData1;
  serviceData2;
  serviceData4=[]
  constructor(private http:HttpClient) { }
  // test={
  //   page:[
  //     {
  //       type:"firstname",
  //       title:"Quiz Heading goes here",
  //       title_sub:"Quiz Sub Heading goes here",
  //       background_color: "#000",
  //       button_click:"Submit",
  //       field:[

  //       ]
  //     },
  //     {
  //       type:"text_input_field",
  //       title:"New Question",
  //       background_color:"#000",
  //       button_click:"submit",
  //     },
  //     {
  //       type:"multi_select_field",
  //       title:"Write Question Here",
  //       background_color:"#000",
  //       button_click:"submit",
  //       multioption:[{
  //         option:"Option1"
  //       },
  //       {
  //         option:"Option2"
  //       }
  //     ]

  //     }
  //   ],
  //   template:{

  //   }
  // };

  // store_data_localhost(data){
  //   localStorage.setItem("template",JSON.stringify(data));
  // }

  // fetch_Data_from_data(){
  //   return JSON.parse(localStorage.getItem("template"));
  // }

  // store_data_first_time(){
  //   if(localStorage.getItem("template") === null){
  //     localStorage.setItem("template",JSON.stringify(this.test));
  //   }
  // }
  // store_data_first_time_in_live(data) {
  //   if (localStorage.getItem("finallylive") === null) {
  //     localStorage.setItem("finallylive", JSON.stringify(data));
  //   }

  // }
  // fetch_Data_from_data_in_live() {
  //   return JSON.parse(localStorage.getItem("finallylive"));
  // }

  test = {
    page: [
      // {
      //   type: "firstpage",
      //   title: "Quiz heading goes here",
      //   title_sub: "Quiz sub heading goes here",
      //   imagelogo: "https://cdn.filestackcontent.com/HJHzOXClQcao8ooZh8By",
    
      //   button_click: "Submit",
      //   field:[
      //         ]

      // },
      {
        Type: "text_input_field",
        question_name: "Write Question Here ?",
        isAnswer:"",
        submit_name:"Submit"


         
      },
            {
       Type: "multi_select_field",
       question_name: "Write Question Here ?",
       submit_name:"Submit",
       isAnswer1:[],
    
        Options:[{
          "option_name":"Option 1",
        },
        {
          "option_name":"Option 2"

        },
        
      ]

      },
      {
        Type:"single_slider",
        question_name: "Write Question Here ?",
        submit_name:"Submit",
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
        Type:"file",
        question_name:"File Upload Here ?",
        url:""
      }
       

    ],
    template: {

    }

  }​​​​​​​;

  store_data_first_time() {
    if (localStorage.getItem("template") === null) {
      localStorage.setItem("template", JSON.stringify(this.test));
    }

  }
  fetch_Data_from_data() {
    return JSON.parse(localStorage.getItem("template"));
  }

  store_data_localhost(data) {
      localStorage.setItem("template", JSON.stringify(data));
  
    console.log("data",data);
  }
  quizGuard(){
    if(JSON.parse(localStorage.getItem("finallylive"))){
      console.log("working")
      return true;
    }
    console.log("efjbgefu");
    return false;

  }

//backend 


addQuestions(question){
  let headers = new HttpHeaders();
  headers.append('Content-Type','application-json');
  return this.http.post('http://localhost:3000/api/addQuestion',question,{headers:headers}).toPromise();
}
getQuestion(){
  let headers=new HttpHeaders();
  headers.append('Content-Type',"application-json");
  return this.http.get("http://localhost:3000/api/question",{headers:headers}).toPromise();
  
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
  console.log("value",value);
}
getData2(){
  return this.serviceData2
}

}
