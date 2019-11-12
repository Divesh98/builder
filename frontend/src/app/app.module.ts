import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
import { AuthModule } from './Auth/auth.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {ToastrModule} from'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {MatButtonModule,MatMenuModule,MatStepperModule,MatSliderModule,MatRadioModule,MatDialogModule,MatInputModule, MatCheckboxModule} from '@angular/material';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AlldataService } from './service/alldata.service';
import { NextpageComponent } from './nextpage/nextpage.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { TextFieldComponent } from './text-field/text-field.component';
import { SingleSliderComponent } from './single-slider/single-slider.component';
import { MultiSelectFieldComponent } from './multi-select-field/multi-select-field.component';
import { GoliveComponent } from './golive/golive.component';
import { LiveComponent } from './live/live.component';
import { NumberSliderComponent } from './number-slider/number-slider.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RatingFieldComponent } from './rating-field/rating-field.component';
import { QuizGuard } from './guards/quiz.guard';
import { ChatService } from './service/chat.service';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { Next1Component } from './next1/next1.component';
import { Golive1Component } from './golive1/golive1.component';
import { Live1Component } from './live1/live1.component';
import { SingleSlider1Component } from './single-slider1/single-slider1.component';
import { TextField1Component } from './text-field1/text-field1.component';
import { MultiSelectField1Component } from './multi-select-field1/multi-select-field1.component';
import { ModalModule } from "ngx-bootstrap/modal";
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FilestackModule } from '@filestack/angular';
import { DialogComponent } from './dialog/dialog.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';








@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent,
    FirstpageComponent,
    NextpageComponent,
    TextFieldComponent,
    SingleSliderComponent,
    MultiSelectFieldComponent,
    GoliveComponent,
    LiveComponent,
    NumberSliderComponent,
    DropdownComponent,
    RatingFieldComponent,
    Next1Component,
    Golive1Component,
    Live1Component,
    SingleSlider1Component,
    TextField1Component,
    MultiSelectField1Component,
    FileUploadComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    ModalModule.forRoot(),
    FilestackModule,
    NgbModule,
    // CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'divesh',upload_preset:'ml_default',private_cdn:'true',api_key:'658782923392398',api_secret:'yxs6R88TDeVqPjczGTsQC9NICiQ'}),





    AppRoutingModule,
    AuthModule,
    DashboardModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,MatInputModule,MatSliderModule,MatDialogModule,MatRadioModule,MatStepperModule,
    NgxUiLoaderModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:"toast-top-right",
      tapToDismiss:false
    })
  ],
  providers: [AuthService,AuthGuard,AlldataService,QuizGuard,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
