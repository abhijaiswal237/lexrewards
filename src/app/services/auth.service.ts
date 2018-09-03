import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // user:string;
  // userid:string;
  // email:string;
  // verifiedEmail:boolean = false;
  // loginStatus:boolean = false;
  url = 'https://localhost:44306/api/';
  loginurl = 'https://localhost:44306/token'
  ValidateUsername(username: string) {
    localStorage.setItem('user', username);
    return this.http.get(this.url+'Account/AvailableUsername/?username='+username);
  }

  availableEmail(email: string) {
    return this.http.get(this.url+'Account/AvailableEmail/?email='+email);
  }

  VerifyZip(zip: string){
    return this.http.get<string>('https://localhost:44306/api/Account/VerifyZip/?zip='+zip);
  }

  Step2(email: string){
    let Email:string  = email;
    let Username:string = localStorage.getItem('user');
    localStorage.setItem('email', email);
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post(this.url+'Account/ValidateEmail', {Username, Email}, httpOptions);
  }

  // RegisterAndValidateEmail(email: string, password: string, confirmPassword: string) {
  //   let Email:string  = email;
  //   let Password:string  = password;
  //   let ConfirmPassword:string  = confirmPassword;
  //   let Username:string = localStorage.getItem('user');
  //   localStorage.setItem('email',email);
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'content-type': 'application/json'
  //     })
  //   };
    // return this.http.post(this.url+'Account/ValidateEmail', {Username, Email, Password, ConfirmPassword}, httpOptions);
  // }

  ConfirmEmail(code: string) {
    let userid = localStorage.getItem('userid');
    return this.http.get(this.url+'Account/ConfirmEmail/?userId='+userid+'&code='+code);
  }

  UpdateBeforeLogin(firstname: string, lastname: string, zipcode: string, password: string, confirmPassword: string){
    // let ZipCode:string  = zipcode;
    // let FirstName:string  = firstname;
    // let LastName:string  = lastname;
    let UserName:string = localStorage.getItem('user');
    let Email:string = localStorage.getItem('email');
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post(this.url+'Account/Register', {UserName, Email, password, confirmPassword, firstname, lastname, zipcode}, httpOptions);
  }

  LoginUser(username: string, password: string){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('grant_type', 'password');
    urlSearchParams.set('username', username);
    urlSearchParams.set('password', password);
    let body = urlSearchParams.toString();
    return this.http.post(this.loginurl, body);
  }

  AvailableResetEmail(email: string) {
    return this.http.get(this.url+'Account/AvailableResetEmail/?email='+email);
  }

  ForgetPassword(Email: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };  
    return this.http.post(this.url+'Account/ForgotPassword', {Email}, httpOptions);
  }

  logout(){
    localStorage.removeItem('loginStatus');
  }
}
