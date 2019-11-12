import { Component, OnInit,Input } from '@angular/core';
import { AlldataService } from '../service/alldata.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  apikey: string;
  onSuccess:any;
  onError:any;
  alldata;
  title;
  path



  constructor(private alldataservice:AlldataService,private toast:ToastrService) {
     }
     ngOnInit() {
       this.alldata=this.alldataservice.fetch_Data_from_data()
       this.title=this.alldata.page[this.i].question_name
       console.log("in patg",this.alldata.page[this.i])
       
       this.apikey='AZUTvAikJS9yeYUR2Rrssz'
       this.onSuccess = (res) => console.log('###onSuccess', res);
       this.onError = (err) => console.log('###onErr', err);
     }
     options = {
      editInPopup: true,
      charCounterCount: true,
      multiLine: true,
  
      events: {
  
        'froalaEditor.contentChanged': (e, editor) => {
          this.title = e.target.innerHTML;
          
          this.alldata.page[this.i].question_name = e.target.innerHTML;
       
          localStorage.setItem("template", JSON.stringify(this.alldata));
          // this.alldataservice.store_data_localhost(this.alldata.page)
       
          this.alldataservice.fetch_Data_from_data()
          console.log("edef",this.alldata)
        },
        'froalaEditor.initialized': (e, editor) => {
          editor.html.set(this.alldata.page[this.i].question_name);
        }
  
  
      }
    }
     @Input() i: number;
     pathdata;
   
     onUploadSuccess(res: object) {
     
       console.log('###uploadSuccess', res['filesUploaded'][0].url);
       this.pathdata=res['filesUploaded'][0].url
       console.log("path",this.pathdata)
       this.alldata.page[this.i].url=this.pathdata

       console.log("now data in storage",this.alldata.page[this.i].url)
       this.alldataservice.store_data_localhost(this.alldata);
       this.toast.success('File is Uploaded');
     }
   
     onUploadError(err: any) {
       console.log('###uploadError', err);
     }
   

     }
