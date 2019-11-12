import { Component, OnInit,Input } from '@angular/core';
import { AlldataService } from '../service/alldata.service';

@Component({
  selector: 'app-number-slider',
  templateUrl: './number-slider.component.html',
  styleUrls: ['./number-slider.component.css']
})
export class NumberSliderComponent implements OnInit {
//   title;
//   alldata;
//   thumbLabel =true;
//   value = 0;
//   leftlable;
// res=[];
//   rightlable;

  constructor(private alldataservice: AlldataService) { }

  ngOnInit() {
//     this.alldata = this.alldataservice.fetch_Data_from_data();
//     this.value=this.alldata.page[this.i].opanion.end;
// this.fetchleftright();
// this.fetchli();
  }
  // fetchli()
  // {
  //   this.res=[];
  //   for(let i=0;i<this.value;i++)
  //   {
  //     this.res.push(i);
  //   }
  // }
  // sliderxxx()
  // {
  //   this.alldata.page[this.i].opanion.end=this.value;
  //   this.alldataservice.store_data_localhost(this.alldata);
  //   this.fetchli();
  // }
  // fetchleftright()
  // {
  //   this.leftlable=this.alldata.page[this.i].opanion.left_lable;
  //   this.rightlable=this.alldata.page[this.i].opanion.right_lable;
  // }

  // addleft()
  // {
   
  //   this.alldata.page[this.i].opanion.left_lable="left Lable"; 
  //   this.alldataservice.store_data_localhost(this.alldata);
  //   this.fetchleftright();
  // }

  // addright()
  // {
  //   this.alldata.page[this.i].opanion.right_lable="right Lable"; 
  //   this.alldataservice.store_data_localhost(this.alldata);
  //   this.fetchleftright();
  // }
  // @Input() i: number;

  // Opinionedit = {
  //   toolbarInline: true,
  //   charCounterCount: false,
  //   multiLine: false,

  //   events: {

  //     'froalaEditor.contentChanged': (e, editor) => {
  //       this.title = e.target.innerHTML;
  //       this.alldata.page[this.i].title = e.target.innerHTML;
  //       localStorage.setItem("template", JSON.stringify(this.alldata));

  //     },
  //     'froalaEditor.initialized': (e, editor) => {
  //       editor.html.set(this.alldata.page[this.i].title);
  //     }


  //   }

  // }

  // lefteditx= {
  //   toolbarInline: true,
  //   charCounterCount: false,
  //   multiLine: false,

  //   events: {

  //     'froalaEditor.contentChanged': (e, editor) => {
  //       this.title = e.target.innerHTML;
  //       this.alldata.page[this.i].opanion.left_lable = e.target.innerHTML;
  //       localStorage.setItem("template", JSON.stringify(this.alldata));

  //     },
  //     'froalaEditor.initialized': (e, editor) => {
  //       editor.html.set(this.alldata.page[this.i].opanion.left_lable);
  //     }


  //   }

  // }

  // rightteditx= {
  //   toolbarInline: true,
  //   charCounterCount: false,
  //   multiLine: false,

  //   events: {

  //     'froalaEditor.contentChanged': (e, editor) => {
  //       this.title = e.target.innerHTML;
  //       this.alldata.page[this.i].opanion.right_lable = e.target.innerHTML;
  //       localStorage.setItem("template", JSON.stringify(this.alldata));

  //     },
  //     'froalaEditor.initialized': (e, editor) => {
  //       editor.html.set(this.alldata.page[this.i].opanion.right_lable);
  //     }


  //   }

  // }


}
