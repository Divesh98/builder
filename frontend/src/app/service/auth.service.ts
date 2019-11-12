import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from 'rxjs/operators';
import {Observable,Subject,BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken:any;
  
  user:any;
  tempArray2=[];

  tempArray=new BehaviorSubject([]);

  // tempArray2=this.tempArray.asObservable();
  
  

  constructor(private http:HttpClient) { }

  //onsignup

  signup(user):Observable<any>{
    let headers =new HttpHeaders();
    headers.append('Content-Type','/application/json');
    return this.http.post("http://localhost:3000/api/signup",user,{headers:headers})
    .pipe(map(res=>res));
  }
  //on Login

  AuthLogin(userauth):Observable<any>{ 
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/api/authenticate",userauth,{headers:headers})
  .pipe(map(res=>res));
  }
  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.user=user;

  }
  //get token
  getToken(){
   return localStorage.getItem('id_token');
  }
  getUserDetails(){
    let user =JSON.parse(localStorage.getItem('user'));
    return user;
  }
  loggedIn(){
    var token = this.getToken();
    if(token)
      return true;
      return false;
  }
  logOut(){
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
    localStorage.clear();
    this.authToken =null;
    this.user=null;
  }
  addQuestion(question){
    this.tempArray2.push(question);
    this.tempArray.next(this.tempArray2);
    console.log("in service ",this.tempArray.value);
  }
  getQuestions(){
   
    return this.tempArray;
  }
  // setQuestions(item){
  //   this.tempArray.value.push(item)
  // }
}
