import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public name="";
  nestedForm:FormGroup;
   selectedData:string="";
   tempArray=[];
   tempArray1=[];
   tempArray2=[];
   abc:any;
   questions:any;
   testData=[];
  constructor(private fb:FormBuilder,private router:Router,private authService:AuthService) { }

  ngOnInit() {
    //guards
    if(this.authService.loggedIn){
      this.router.navigate(['/editor'])
    }
    else{
      this.router.navigate(['/login'])
    }




    this.tempArray1=[];
    document.getElementById("singleSelectId").style.visibility="hidden";
      document.getElementById("dropDownId").style.visibility="visible";
      document.getElementById("textInput").style.visibility="hidden";
      document.getElementById("checkbox").style.visibility="hidden";

    this.nestedForm=this.fb.group({ 
      question:this.fb.array([this.question])

    })
    
    

  }
  addQuestion(){
    (this.nestedForm.get('question')as FormArray).push(this.question);
  }
  go(event:any){
    console.log("comming",event.target.value);
  }
  removeQuestion(index){
    (this.nestedForm.get('question')as FormArray).removeAt(index);
  }
  addOption(group){
    group.get('Options').push(this.Options)

  }
  deleteOption(group,index){
    group.get('Options').removeAt(index);

  }
  change(data){
    // this.tempArray.push(this.questions);
    // console.log("coming");
    
  // console.log("questions is here",data);
  // this.tempArray1.push(data);

  this.authService.addQuestion(data);
  console.log("data",data)
  console.log("data",data.question)
  this.authService.getQuestions().subscribe(data=>{

    this.testData=data[0].question;

    console.log("data[0]['question']",data[0].question);
    console.log("ssscssc",this.testData);
    console.log("data in ts file",data);
    this.tempArray=data;
    console.log("this.tempArray",this.tempArray[0].question);
    this.tempArray2.push(this.tempArray[0].question);
    console.log("temparray2",this.tempArray2);
  })
  // this.empty=false;
  // this.full=true;
// console.log("this.tempArray1[0].question",this.tempArray1[0].question);

//subject


// this.authService.setQuestions(this.tempArray);
// console.log("temp",this.tempArray);

// this.authService.addQuestion(this.tempArray);
// console.log("questions ddv",this.tempArray);

// this.authService.tempArray2.subscribe(abc=>{
//   this.abc=this.tempArray
//   console.log("abc",abc);
// }) 
}
 
// getquiz(){
//   console.log("in getquiz");
//   if(this.tempArray1.length==0){
//     this.empty=true;
//     console.log("in if cond.")
//     return this.tempArray1;
//   }else{
//     this.empty=false;
//     this.full=true;
//     console.log("in else condition")
//     console.log("hello i m in",this.tempArray1[0].question);
//     return this.tempArray1[0].question;
//   }
  
// }
  get question():FormGroup{
    return this.fb.group({
      questions:new FormControl(null,[Validators.required]),
      Options:this.fb.array([this.Options])

    });
  }
  get Options():FormGroup{
    return this.fb.group({
      option:new  FormControl(null,[Validators.required]),
      isAnswer:new  FormControl(null,[Validators.required])

    });
  }
  submitHandler(data){
    // console.log("nested data is ",data);
    // console.log("data is here",data.question[0].questions);
    // let opts=data.question;
  // console.log("opts[i].Options.length",opts[0].Options.length);
  //  let abc =data.question;
  //  let bca=opts[j].Options.length;
  //  for(let i=0;i<abc.length;i++){

      // console.log("questions are",data.question[i].questions);
      
      // this.tempArray.push(data.question[i]);

      // console.log("temp",this.tempArray);

      // for(let j=0;j<opts[i].Options.length;j++){

        // console.log("opts[j].Options",opts[i].Options[j]);
// 
        // this.tempArray.push(opts[i].Options[j]);


      // this.tempArray.push(data.question[i]);
      // this.tempArray1.push(data.question[j].Options);
      // let bca = opts[j].Options.length;
    //  }

    // }
    // console.log("temparray",this.tempArray);

  //  console.log("temparray1",this.tempArray1);
  //  console.log("temparray",this.tempArray);



  //  let bca=opts[0].Options.length;
  //  console.log("bca",bca); 
  //  for(let i=0;i<bca;i++){
  //    console.log("how many");
      // this.tempArray1.push(data.question[i].Options);
      // console.log("temp",this.tempArray1)
      // console.log("opts",data.question[i].Options);
    // }

  //   let abc=data.question;
   
  //   console.log("abc",abc);
  //   console.log("abc.length",abc.length)
  //   for(let i=0;i<abc.length;i++){
  //   this.tempArray.push(data.question[i]);
  // }
  // console.log("this.tempArray",this.tempArray);  

  this.authService.addQuestion(data);
  console.log("data",data)
  console.log("data",data.question)
  this.authService.getQuestions().subscribe(data=>{

    this.testData=data[0].question;

    console.log("data[0]['question']",data[0].question);
    console.log("ssscssc",this.testData);
    console.log("data in ts file",data);
    this.tempArray=data;
    console.log("this.tempArray",this.tempArray[0].question);
    this.tempArray2.push(this.tempArray[0].question);
    console.log("temparray2",this.tempArray2);
  });
  
  }


  getOptionId(data:any){
    this.selectedData=data.target.value
    console.log('selcted',this.selectedData);
    if(this.selectedData =='dropdown'){
      document.getElementById("dropDownId").style.visibility="visible";
      document.getElementById("singleSelectId").style.visibility="hidden";
      document.getElementById("textInput").style.visibility="hidden";
      document.getElementById("checkbox").style.visibility="hidden";
    }
    else if(this.selectedData == "singleSelect"){
      document.getElementById("singleSelectId").style.visibility="visible";
      document.getElementById("dropDownId").style.visibility="hidden";
      document.getElementById("textInput").style.visibility="hidden";
      document.getElementById("checkbox").style.visibility="hidden";
    }
    else if(this.selectedData == "textinput"){
      document.getElementById("singleSelectId").style.visibility="hidden";
      document.getElementById("dropDownId").style.visibility="hidden";
      document.getElementById("textInput").style.visibility="visible";
      document.getElementById("checkbox").style.visibility="hidden";

    }
    else{
      document.getElementById("singleSelectId").style.visibility="hidden";
      document.getElementById("dropDownId").style.visibility="hidden";
      document.getElementById("textInput").style.visibility="hidden";
      document.getElementById("checkbox").style.visibility="visible";

    }
  
  }
}
