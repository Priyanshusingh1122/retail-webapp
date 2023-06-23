import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient) {}

  email: string='';
  password: string='';

  isPasswordValid(): boolean {
    const passwordRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
    return passwordRegex.test(this.password);
  }

  showPassword: boolean = false;

  // Rest of your component code

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  // copilot debug "This code is not working."  

   
  onSubmit() {

    const loginData = {
      email: this.email,
      password: this.password
    };
    
    // Handle login logic here
    console.log('Login clicked');
    console.log('Email:', this.email);
    console.log('Password:', this.password);

  const passwordRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
  if (!passwordRegex.test(this.password)) {
    console.log('Password must be at least 6 characters long and contain a special character');
    // Display an error message or perform any other actions
    return;
  }
    // You can implement your own login logic, such as making an API request



    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        responseType: 'text' // Specify the response type as text
      })
    };
    

    // this.http.post<any>('http://localhost:8000/api/v1/user/login', loginData)
    this.http.post<any>('http://localhost:8000/api/v1/user/login', loginData, { observe: 'response' })
      .subscribe(
        (response) => {
          // handle successful login response
          if (response.status === 200) {

            // const token = response.headers.get('Authorization');
            // localStorage.setItem('token', token);
            console.log('Login successful');
            console.log(response.body.token);
            alert("loged in")
            // Redirect to the desired page or perform any other actions
          } 

          
        },
        (error) => {
          // handle error
          console.error("login failed");
          alert("login failed")
        }
      );

  }
}
