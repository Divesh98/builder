import { Component, OnInit,Input } from '@angular/core';
import { AlldataService } from '../service/alldata.service';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-rating-field',
  templateUrl: './rating-field.component.html',
  styleUrls: ['./rating-field.component.css']
})
export class RatingFieldComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  button_click;
  alldata;
  title;

  constructor(private alldataservice:AlldataService,private chatservice:ChatService) { }

  ngOnInit() {
    this.alldata = this.chatservice.fetch_Data_from_data();
    this.title = this.alldata.chat[this.i].question_name;
    console.log("title",this.title)

    this.button_click = this.alldata.chat[this.i].button_click;
    
  } options = {
    editInPopup: true,
    charCounterCount: true,
    multiLine: true,

    events: {

      'froalaEditor.contentChanged': (e, editor) => {
        this.title = e.target.innerHTML;
        
        this.alldata.chat[this.i].question_name = e.target.innerHTML;
     
        localStorage.setItem("template1", JSON.stringify(this.alldata));
        // this.alldataservice.store_data_localhost(this.alldata.page)
     
        this.chatservice.fetch_Data_from_data()
        console.log("edef",this.alldata)
 
      

      },
      'froalaEditor.initialized': (e, editor) => {
        editor.html.set(this.alldata.chat[this.i].question_name);
      }


    }
  }
  @Input() i: number;

  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
    this.chatservice.setData3(star)
    this.alldata.chat[this.i].ratingAnswer=star
    console.log(" this.alldata.chat[this.i].ratingAnswer", this.alldata.chat[this.i].ratingAnswer)
    this.alldataservice.store_data_localhost(this.alldata)
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
        this.alldata.chat[this.i].submit_name = this.button_click;
        localStorage.setItem("template1", JSON.stringify(this.alldata));
        this.chatservice.fetch_Data_from_data()

      },
      'froalaEditor.initialized': (e, editor) =>
       {
        editor.html.set(this.alldata.chat[this.i].submit_name);
      }



    }
  }

}
